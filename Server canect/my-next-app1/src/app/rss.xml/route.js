// app/api/rss/route.js

export const dynamic = 'force-dynamic'; // Ensures the route is dynamic

export async function GET() {
    return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
  <title>Next.js Documentation</title>
  <link>https://nextjs.org/docs</link>
  <description>The React Framework for the Web</description>
  <item>
    <title>Sample Page</title>
    <link>https://yourwebsite.com/sample-page</link>
    <description>This is a sample page for testing links.</description>
  </item>
</channel>

</rss>`, {
        headers: {
            'Content-Type': 'application/rss+xml',
        },
    });
}
