'use client'

import revalidatesk from '@/components/revalidate';
import React, { useState } from 'react';


const REWues = () => {
    const fetchData = async () => {
        const value = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { tags: ['a'] } });
        const data = await value.json();
        console.log(data);
    };

    fetchData();

    return (
        <div>

            <button onClick={() => revalidatesk()}>on clicked</button>
            <p>{
                getItem(1)
            }</p>
            <div>
                {
                    getItem(2)
                }
            </div>
        </div>
    );
};

export default REWues;


import { cache } from 'react'

const getItem = cache(async (id) => {
    return id * 2;
})