export const languages = {
    en: { label: 'English', icon: 'cif:gb' },
    de: { label: 'Deutsch', icon: 'cif:de' },
};

export const defaultLang = 'en';

export const ui = {
    en: {
        '404.sorry': "Sorry, we couldn't find this page.",
        '404.hint': "But dont worry, you can find plenty of other things on our homepage.",
        '404.homelink': "Back to homepage",
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.twitter': 'Twitter',
        'index.latest_posts_title': 'Some translated thoughts ...'
    },
    de: {
        '404.sorry': "Leider existiert diese Seite nicht.",
        '404.hint': "Es gibt andere gute Seiten - zurück zu Los!",
        '404.homelink': "Zurück zur Hauptseite",
        'nav.home': 'Hauptseite',
        'nav.about': 'über',
        'index.latest_posts_title': 'Ein paar Gedanken ...'
    },
} as const;