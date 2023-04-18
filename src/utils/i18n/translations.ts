export const languages = {
    en: {label: 'English', icon: 'cif:gb'},
    de: {label: 'Deutsch', icon: 'cif:de'},
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.twitter': 'Twitter',
        'index.latest_posts_title': 'Some translated thoughts ...'
    },
    de: {
        'nav.home': 'Hauptseite',
        'nav.about': 'über',
        'index.latest_posts_title': 'Ein paar Gedanken ...'
    },
} as const;