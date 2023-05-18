import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { cleanSlug, trimSlash, POST_PERMALINK_PATTERN } from './permalinks';
import { languages } from './i18n/translations';

const generatePermalink = async ({ id, slug, publishDate, category }) => {
  const year = String(publishDate.getFullYear()).padStart(4, '0');
  const month = String(publishDate.getMonth() + 1).padStart(2, '0');
  const day = String(publishDate.getDate()).padStart(2, '0');
  const hour = String(publishDate.getHours()).padStart(2, '0');
  const minute = String(publishDate.getMinutes()).padStart(2, '0');
  const second = String(publishDate.getSeconds()).padStart(2, '0');

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

export interface Post {
  id: string;
  slug: string;
  languageCode: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  published?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: unknown;
  content?: string;

  readingTime?: number;
}

const getNormalizedPost = async (post: CollectionEntry<'blog'>): Promise<Post> => {
  const { id, slug: rawSlug = '', data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();

  const {
    tags: rawTags = [],
    category: rawCategory,
    author,
    publishDate: rawPublishDate = new Date(),
    ...rest
  } = data;

  const slug = cleanSlug(rawSlug);
  const languageCode = slug.split('/')[0];
  const publishDate = new Date(rawPublishDate);
  const category = rawCategory ? cleanSlug(rawCategory) : undefined;
  const tags = rawTags.map((tag: string) => cleanSlug(tag));

  return {
    id: id,
    slug: slug,
    languageCode: languageCode,

    publishDate: publishDate,
    category: category,
    tags: tags,
    author: `${author.title ?? ''} ${author.first_name ?? ''} ${author.last_name ?? ''}`,

    ...rest,

    Content: Content,
    // or 'body' in case you consume from API

    permalink: await generatePermalink({ id, slug, publishDate, category }),

    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const load = async function (languageCode?: string): Promise<Array<Post>> {
  const posts = await getCollection('blog');
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((post) => post.published && (!languageCode || post.languageCode === languageCode));
  // .filter((post) => post.published);

  return results;
};

let _posts: Array<Post>;

/** */
export const fetchPosts = async (languageCode?: string): Promise<Array<Post>> => {
  if (!_posts) {
    _posts = await load(languageCode);
  }

  return _posts;
};

/** */
export const findPostsBySlugs = async (slugs: Array<string>, languageCode?: string): Promise<Array<Post>> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchPosts(languageCode);

  return slugs.reduce(function (r: Array<Post>, slug: string) {
    posts.some(function (post: Post) {
      return slug === post.slug && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findPostsByIds = async (ids: Array<string>, languageCode?: string): Promise<Array<Post>> => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts(languageCode);

  return ids.reduce(function (r: Array<Post>, id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findLatestPosts = async ({ count }: { count?: number }, languageCode?: string): Promise<Array<Post>> => {
  const _count = count || 4;
  const posts = await fetchPosts(languageCode);

  return posts ? posts.slice(0, _count) : [];
};
