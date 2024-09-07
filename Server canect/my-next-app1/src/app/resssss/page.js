// app/posts/page.tsx
import { MongoClient } from 'mongodb';

// Replace with your MongoDB connection string
const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri);

async function getPosts() {
    await client.connect();
    const database = client.db('mydatabase');
    const posts = database.collection('posts');
    const postsList = await posts.find({}).toArray();
    return postsList;
}

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
