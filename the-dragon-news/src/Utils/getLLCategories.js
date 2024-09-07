export const getALLCategories = async () => {
    const res = await fetch("https://b8-the-dragon-news-with-next-js-server-main-n4ydf8q75.vercel.app/");
    console.log(res.json())
    return res.json();
}