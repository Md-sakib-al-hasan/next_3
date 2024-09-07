// app/blog/ogImage/route.js
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');
    const author = searchParams.get('author');

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 48,
                    fontFamily: 'Arial, sans-serif',
                    background: '#1a1a1a',
                    color: '#ffffff',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    boxSizing: 'border-box',
                }}
            >
                <h1>{title}</h1>
                <p>by {author}</p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
