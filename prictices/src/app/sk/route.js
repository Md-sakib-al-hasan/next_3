export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request) {
    return new Response(JSON.stringify({ name: "sakib" }), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}