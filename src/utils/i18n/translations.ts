export const languages = {
    en: { label: 'English', icon: 'cif:gb' },
    de: { label: 'Deutsch', icon: 'cif:de' },
};

export const defaultLang = 'en';

export const ui = {

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


// interface Link {
//     text?: string;
//     href?: string;
//     ariaLabel?: string;
//     icon?: string;
// }

// interface ActionLink extends Link {
//     type?: string;
// }

// interface MenuLink extends Link {
//     links?: Array<Link>;
// }

// export const navigation = {
//         text: {
//         en: {
//             'nav.pages': 'Paages',

//             links: [
//                 {
//                     text: 'Features',
//                     href: '#',
//                 },
//                 {
//                     text: 'Pricing',
//                     href: '#',
//                 },
//                 {
//                     text: 'About us',
//                     href: '#',
//                 },
//                 {
//                     text: 'Contact',
//                     href: '#',
//                 },
//                 {
//                     text: 'Terms',
//                     href: getPermalink('/terms'),
//                 },
//                 {
//                     text: 'Privacy policy',
//                     href: getPermalink('/privacy'),
//                 },
//             ],
//         },
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
