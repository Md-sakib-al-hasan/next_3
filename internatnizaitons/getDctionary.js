const dictionaries = {
    en: () => import("./Dicsonary/en.json").then(r => r.default),
    bn: () => import("./Dicsonary/bg.json").then(r => r.default)
}

export const getDictionary = (lang) => {
    return dictionaries[lang]();
}