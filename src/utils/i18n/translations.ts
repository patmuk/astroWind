import { getPermalink, getBlogPermalink, getAsset } from "../permalinks";

export const languages = {
    en: { label: 'English', icon: 'cif:gb' },
    de: { label: 'Deutsch', icon: 'cif:de' },
};


export const defaultLang = 'en';

interface Translation {
    [key: string]: {
        en: string;
        de?: string;
    };
}

export const ui: Translation = {

    '404.sorry': {
        en: "Sorry, we couldn't find this page.",
        de: "Leider existiert diese Seite nicht."
    },
    '404.hint': {
        en: "But dont worry, you can find plenty of other things on our homepage.",
        de: "Es gibt andere gute Seiten - zurück zu Los!"
    },
    '404.homelink': {
        en: "Back to homepage",
        de: "Zurück zur Hauptseite"
    }
    ,
    'nav.home': {
        en: 'Home',
        de: 'Hauptseite'
    },
    'nav.about': {
        en: 'About',
        de: 'über'
    },
    'nav.twitter': {
        en: 'Twitter'
    },
    'index.latest_posts_title': {
        en: 'Some translated thoughts ...',
        de: 'Ein paar Gedanken ...'
    },
} as const;


export interface Link {
    [language: string]: {
        text: string;
        href: string;
    }
}

export interface IconLink {
    icon: string;
    link: Link;
}

export enum ActionType {
    Button = 'button',
    PrimaryButton = 'primary',
    GhostButton = 'ghost',
}

export interface ActionLink {
    action: ActionType;
    link: Link;
}

export interface LinkMenu {
    en: string;
    de?: string;
    links: Array<Link>;
}

export function isLink(entry: any): entry is Link {
    return typeof entry.language.href === 'string'
}

export function isLinkMenu(entry: any): entry is LinkMenu {
    return typeof entry === 'object' && entry !== null && 'links' in entry;
}
const terms = {
    en: { text: 'Terms', href: getPermalink('/terms'), },
    de: { text: 'Nutzungsbedingungen', href: getPermalink('/terms'), },
}
const privacy_policy = {
    en: { text: 'Privacy policy', href: getPermalink('/privacy') },
    de: { text: 'Privacy policy', href: getPermalink('/privacy'), },
}



const links: Array<Link | LinkMenu> =
    [
        {
            en: 'Pages',
            de: 'Seiten',
            links: [
                {
                    en: { text: 'Features', href: '#' },
                    de: { text: 'Features', href: '#' },
                },
                {
                    en: { text: 'About me', href: '#about_me', },
                    de: { text: 'über mich', href: '#ueber_mich', }
                },
                {
                    en: { text: 'Contact', href: '#', },
                    de: { text: 'Kontact', href: '#', }
                },
                terms,
                privacy_policy
            ],
        },
        {
            en: 'second Menu',
            // de: 'Zweites Menu',
            links: [
                {
                    en: { text: 'Test Entry', href: '#' },
                    de: { text: 'Test Eintrag', href: '#' },
                },
                {
                    en: { text: 'further test entry', href: '#', },
                    de: { text: 'weiterer Testeintrag', href: '#', }
                },
            ],
        },
        {
            en:
                { text: 'Blog', href: getBlogPermalink(), },
        },
        {
            en: { text: 'direct link', href: '#', },
            de: { text: 'direkter Link', href: '#', }
        }
    ]
const actions: Array<ActionLink> =
    [
        {
            action: ActionType.Button,
            link: {
                en: { text: 'Download', href: 'https://github.com/onwidget/astrowind' },
                de: { text: 'herunterladen', href: 'https://github.com/onwidget/astrowind' }
            }
        }
    ]

export const headerNavigation: {
    links: Array<Link | LinkMenu>;
    actions: Array<ActionLink>;
} = {
    links,
    actions,
};

export interface FooterNavigation {
    links: Array<LinkMenu>;
    secondaryLinks: LinkMenu;
    socialLinks: Array<IconLink>;
    footNote: string;
}

export const footerNavigation: FooterNavigation = {
    links: [
        {
            en: 'Product',
            links: [
                {
                    en: { text: 'Features', href: '#' },
                },
                {
                    en: { text: 'Security', href: '#' },
                },
                {
                    en: { text: 'Team', href: '#' },
                },
                {
                    en: { text: 'Enterprise', href: '#' },
                },
                {
                    en: { text: 'Customer stories', href: '#' },
                },
                {
                    en: { text: 'Pricing', href: '#' },
                },
                {
                    en: { text: 'Resources', href: '#' },
                },
            ],
        },
        {
            en: 'Platform',
            links: [
                {
                    en: { text: 'Developer API', href: '#' },
                },
                {
                    en: { text: 'Partners', href: '#' },
                },
                {
                    en: { text: 'Atom', href: '#' },
                },
                {
                    en: { text: 'Electron', href: '#' },
                },
                {
                    en: { text: 'AstroWind Desktop', href: '#' },
                },
            ],
        },
        {
            en: 'Support',
            links: [
                { en: { text: 'Docs', href: '#' }, },
                { en: { text: 'Community Forum', href: '#' }, },
                { en: { text: 'Professional Services', href: '#' }, },
                { en: { text: 'Skills', href: '#' }, },
                { en: { text: 'Status', href: '#' }, },
            ],
        },
        {
            en: 'Company',
            links: [
                { en: { text: 'About', href: '#' }, },
                { en: { text: 'Blog', href: '#' }, },
                { en: { text: 'Careers', href: '#' }, },
                { en: { text: 'Press', href: '#' }, },
                { en: { text: 'Inclusion', href: '#' }, },
                { en: { text: 'Social Impact', href: '#' }, },
                { en: { text: 'Shop', href: '#' }, },
            ],
        },
    ],
    secondaryLinks: {
        en: 'HIER',
        links: [
            terms,
            privacy_policy
        ],
    },

    socialLinks: [
        { icon: 'tabler:brand-twitter', link: { en: { text: 'Twitter', href: '#' }, }, },
        { icon: 'tabler:brand-instagram', link: { en: { text: 'Instagram', href: '#' }, }, },
        { icon: 'tabler:brand-facebook', link: { en: { text: 'Facebook', href: '#' }, }, },
        { icon: 'tabler:rss', link: { en: { text: 'RSS', href: getAsset('/rss.xml') }, }, },
        { icon: 'tabler:brand-github', link: { en: { text: 'Github', href: 'https://github.com/onwidget/astrowind' }, }, },
    ],
    footNote: `
        <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://astro.build/favicon.svg)]"></span>
        Made with <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://astro.build/"> Astro</a> · All rights reserved.
      `,
};
