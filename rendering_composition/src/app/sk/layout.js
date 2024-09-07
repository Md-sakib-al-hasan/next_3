// app/layout.js or app/layout.tsx
"use client"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
    useEffect(() => {
        // Ensure Bootstrap's JavaScript runs properly
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <html lang="en">
            <body className="container">{children}</body>
        </html>
    );
}
