const dictionaries = {
    en: () => import("./dictionaries/{} en.json").then(r => r.default),
    hi: () => import("./dictionaries/{} bangla.json").then(r => r.default)
}

export const getDictionary = (lang) => {
    return dictionaries[lang]();
}