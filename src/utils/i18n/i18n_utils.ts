import { languages, ui, defaultLang } from './translations';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as keyof typeof languages;
    return defaultLang;
}

// export function useTranslations(lang: keyof typeof ui) {
//     return function t(key: keyof typeof ui[typeof defaultLang]) {
//         return ui[lang][key] || ui[defaultLang][key];
//     }
// }
export function useTranslations(lang: keyof typeof languages) {
    return function t(key: keyof typeof ui) {
        return ui[key][lang] || ui[key][defaultLang];
    }
}

function getPreferedLanguage(): keyof typeof languages {
    const supportedLanguages = Object.keys(languages);
    console.log(`supported languages: ${supportedLanguages}`);
    const languageCodes = navigator.languages || [navigator.language];

    for (const languageCode of languageCodes) {
        const language = languageCode.toLowerCase().split(/[_-]+/)[0];
        if (supportedLanguages.includes(language)) {
            console.log(`user prefered supported language is: ${language}`);
            return language as keyof typeof languages;
        }
    }
    console.log(`none of the user's languages are supported, defaulting to: ${defaultLang}`);
    return defaultLang;
}

// redirects to the language identifyer URL, e.g. http://www.mypa.ge/page.html -> http://www.mypa.ge/en/page.html
export function get_i18n_url(url: URL, lang: keyof typeof languages): URL {
    console.log(`get i18n version of ${url}`)


    const url_path_parts = url.pathname.split(`/`);
    // is there a language code in the url?
    // `http://localhost:3001/en`.split(`/`); => [``,`en`]
    const url_first_part = url_path_parts[1];
    console.log(`first part is: ${url_first_part}`);
    console.log(`url parts are: ${url_path_parts}`);
    // is a lang?
    const supportedLanguages = Object.keys(languages);

    let redirect_url = url;
    if (supportedLanguages.includes(url_first_part)) {
        // replace it with the desired lang
        url_path_parts[1] = lang;
        redirect_url = new URL(url.origin + url_path_parts.join(`/`));
        console.log(`redirect url switching lang only is ${redirect_url}`);
        return redirect_url;
        // at the root?
    } else if (!url_first_part) {
        redirect_url = new URL(url.origin + lang);
        console.log(`redirect url for root is ${redirect_url}`);
        return redirect_url;
        // url without language code (if language code in the url is not supported, the URL won't know)
    } else if (url_first_part) {
        redirect_url = new URL(url.origin + `/` + lang + `/` + url_path_parts.join(`/`));
        console.log(`redirect url adding lang only is ${redirect_url}`);
        return redirect_url;
    }

    // something went wrong
    return redirect_url;
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
    const url = new URL(window.location.href);

    console.log(`redirecting from ${url}`)

    const lang = getPreferedLanguage();
    // const supportedLanguages = Object.keys(languages);
    // for (const languageCode of supportedLanguages) {
    //     if (url.pathname.includes(languageCode)) {
    //         console.log(`not redirecting, already i18n page`);
    //         return url;
    //     }
    // }
    const newURL = get_i18n_url(new URL(location.href), lang);
    if (url != newURL) {
        location.replace(newURL);
    }
}