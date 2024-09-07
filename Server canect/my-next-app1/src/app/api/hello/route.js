// app/api/about/route.js

export async function GET() {
    // Fetch data from your backend or database
    const data = { message: 'Hello from the API route!' };

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}
