'use client'
// app/page.js

import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/hello'); // Relative URL
            const data = await response.json();
            setData(data)
            console.log(data)
            return;
        };

        fetchData();
    }, [])

    // const response = await fetch('api/hello');
    // const response = await fetch('http://localhost:3000/api/hello');
    // const data = await response.json();

    console.log(data)

    return (
        <div>
            <h1>Welcome to the Page</h1>
            <p>{data.message}</p>
        </div>
    );
}
