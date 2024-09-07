import React, { Suspense } from 'react';
import getPost from '../../../../lib/getpost';
import getpostcomment from '../../../../lib/getpostComment';
import Comments from '@/app/components/Comments';
import getAllPosts from '../../../../lib/getAllpost';

export async function generateMetadata({params}){
    const {id} = params
    const post = await getPost(id);
    return{
      title:post.title,
      description: post.body

    };
}

export default async function postpage ({params}) {
    const {id} = params
    const postpromise =  getPost(id);
    const commentspromise = getpostcomment(id);
    
    const post = await postpromise;

    // const [post,comments] = await Promise.all([postpromise,commentspromise])
    // console.log(comments)

    return (
        <div className='mt-6'>
           <h2>{post.title}</h2>
           <p>{post.body}</p>
           <hr></hr>
            
            <Suspense fallback="<h1>Loading comments .....">
                <Comments promise ={commentspromise}></Comments>
            </Suspense>
        </div>
    );
};


export async function generateStaticParams(){
    const posts = await getAllPosts();

    return posts.map((post) =>({
        id:post.id.toString(),
    }))
}
