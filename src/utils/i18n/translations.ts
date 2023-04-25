import { getPermalink } from "../permalinks";

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

const links: Array<Link | LinkMenu> =
    [
        {
            en: 'Pages',
            de: 'Seiten',
            links: [
                {
                    en: {
                        text: 'Features',
                        href: '#'
                    },
                    de: {
                        text: 'Features',
                        href: '#'
                    },
                },
                {
                    en: {
                        text: 'About me',
                        href: '#about_me',
                    },
                    de: {
                        text: 'über mich',
                        href: '#ueber_mich',
                    }
                },
                {
                    en: {
                        text: 'Contact',
                        href: '#',
                    },
                    de: {
                        text: 'Kontact',
                        href: '#',
                    }
                },
                {
                    en: {
                        text: 'Terms',
                        href: getPermalink('/terms'),
                    },
                    de: {
                        text: 'Nutzungsbedingungen',
                        href: getPermalink('/terms'),
                    },
                },
                {
                    en: {
                        text: 'Privacy policy',
                        href: getPermalink('/privacy')
                    },
                    de: {
                        text: 'Privacy policy',
                        href: getPermalink('/privacy'),
                    },
                }
            ],
        },
        {
            en: 'second Menu',
            // de: 'Zweites Menu',
            links: [
                {
                    en: {
                        text: 'Test Entry',
                        href: '#'
                    },
                    de: {
                        text: 'Test Eintrag',
                        href: '#'
                    },
                },
                {
                    en: {
                        text: 'further test entry',
                        href: '#',
                    },
                    de: {
                        text: 'weiterer Testeintrag',
                        href: '#',
                    }
                },
            ],
        },
        {
            en: {
                text: 'direct link',
                href: '#',
            },
            de: {
                text: 'direkter Link',
                href: '#',
            }
        }
    ]
const actions: Array<ActionLink> =
    [
        {
            action: ActionType.Button,
            link: {
                en: {
                    text: 'Download',
                    href: 'https://github.com/onwidget/astrowind'
                },
                de: {
                    text: 'herunterladen',
                    href: 'https://github.com/onwidget/astrowind'
                }
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


//         {
//             text: 'Widgets',
//             href: '#',
//         },
//         {
//             text: 'Blog',
//             href: getBlogPermalink(),
//         },
//     ],
//     actions: [
//         { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
//     ],
// };

// export const footerData = {
//     links: [
//         {
//             text: 'Product',
//             links: [
//                 { text: 'Features', href: '#' },
//                 { text: 'Security', href: '#' },
//                 { text: 'Team', href: '#' },
//                 { text: 'Enterprise', href: '#' },
//                 { text: 'Customer stories', href: '#' },
//                 { text: 'Pricing', href: '#' },
//                 { text: 'Resources', href: '#' },
//             ],
//         },
//         {
//             text: 'Platform',
//             links: [
//                 { text: 'Developer API', href: '#' },
//                 { text: 'Partners', href: '#' },
//                 { text: 'Atom', href: '#' },
//                 { text: 'Electron', href: '#' },
//                 { text: 'AstroWind Desktop', href: '#' },
//             ],
//         },
//         {
//             text: 'Support',
//             links: [
//                 { text: 'Docs', href: '#' },
//                 { text: 'Community Forum', href: '#' },
//                 { text: 'Professional Services', href: '#' },
//                 { text: 'Skills', href: '#' },
//                 { text: 'Status', href: '#' },
//             ],
//         },
//         {
//             text: 'Company',
//             links: [
//                 { text: 'About', href: '#' },
//                 { text: 'Blog', href: '#' },
//                 { text: 'Careers', href: '#' },
//                 { text: 'Press', href: '#' },
//                 { text: 'Inclusion', href: '#' },
//                 { text: 'Social Impact', href: '#' },
//                 { text: 'Shop', href: '#' },
//             ],
//         },
//     ],
//     secondaryLinks: [
//         { text: 'Terms', href: getPermalink('/terms') },
//         { text: 'Privacy Policy', href: getPermalink('/privacy') },
//     ],
//     socialLinks: [
//         { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
//         { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
//         { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
//         { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
//         { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
//     ],
//     footNote: `
//     <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
//     Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
//   `,
// };
