export default async function getAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
        next:{
            revalidate:10,
        },
        // cache
    })
    return res.json();
}