export function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams
    // query is "hello" for /api/search?query=hello
    console.log(query)
}