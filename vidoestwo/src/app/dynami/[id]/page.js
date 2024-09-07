import React from 'react';

const Dynammicpage = async ({ params }) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const value = await data.json();

    return (
        <div>
            <h1 className='text-5xl'>{value.name}</h1>
        </div>
    );
};

export default Dynammicpage;

export async function generateMetadata({ params }) {
    const id = params.id;
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const value = await data.json();

    return {
        title: value.name,
        description: `Profile page for ${value.name}`,
        openGraph: {
            title: value.name,
            description: `Profile page for ${value.name}`,
            images: 'https://i.ibb.co/L1pGJBg/sakib2.png'  //


        }


    }
}