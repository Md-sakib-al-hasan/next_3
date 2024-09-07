"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const UserRouterhoocks = () => {
    const router = useRouter();
    return (
        <div>
            <button type='button' className='btn bg-blue-500'  onClick={() => router.push('/dashboard')}>Dashboard</button>
        </div>
    );
};

export default UserRouterhoocks;