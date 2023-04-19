import { languages, ui, defaultLang } from './translations';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

function getPreferredLanguage() {
    const supportedLanguages = Object.keys(languages);
    console.log(`supported languages: ${supportedLanguages}`);
    const languageCodes = navigator.languages || [navigator.language];

    for (const code of languageCodes) {
        const language = code.toLowerCase().split(/[_-]+/)[0];
        if (supportedLanguages.includes(language)) {
            console.log(`user prefered supported language is: ${language}`);
            return language;
        }
    }
    console.log(`none of the user's languages are supported, defaulting to: ${defaultLang}`);
    return defaultLang;
}

// redirects to the language identifyer URL, e.g. http://www.mypa.ge/page.html -> http://www.mypa.ge/en/page.html
// to be used in the <script> tag for client site execution, e.g.
// pages/404.astro:
// ---
//
// ---
// <astro>
//   <script>
//     import { redirect_to_i18n } from '~/utils/i18n/i18n_utils';
//     redirect_to_i18n();
//   </script>
// < /astro>
//
export function redirect_to_i18n() {
    const url = window.location;

    console.log(`in ${url}`)

    const supportedLanguages = Object.keys(languages);
    for (const languageCode of supportedLanguages) {
        if (url.pathname.includes(languageCode)) {
            console.log(`not redirecting, already i18n page`);
            return url;
        }
    }
    let redirect_url;
    // remove trailing '/'
    if (url.pathname == "/") {
        redirect_url = `${url.origin}/${getPreferredLanguage()}`
    }
    else {
        redirect_url = `${url.origin}/${getPreferredLanguage()}${url.pathname}`;
    }
    console.log(`redirecting to ${redirect_url}`);
    window.location.replace(redirect_url);
}