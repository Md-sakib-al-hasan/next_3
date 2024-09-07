// app/events/promoImage/route.js
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const eventName = searchParams.get('eventName');
    const date = searchParams.get('date');
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(eventName)}`;

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 36,
                    fontFamily: 'Arial, sans-serif',
                    background: '#4CAF50',
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
                <h1>{eventName}</h1>
                <p>Date: {date}</p>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
