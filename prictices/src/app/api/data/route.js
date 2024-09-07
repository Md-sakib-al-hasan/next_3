// pages/api/insert.js



// import { fetchMongoData } from '@/components/hook/getData';
// import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers'

// export async function GET(req) {
//   if (req.method === 'GET') {
//     try {
//       const cookieStore = cookies()
//       const token = req.cookies.get('token')
//       console.log(token)
//       const result = await fetchMongoData();
//       const response = NextResponse.json(result);
//       response.cookies.set('token', 'tokenvalue', {
//         httpOnly: true,
//         maxAge: 60 * 60 * 24,
//       })
//       return response;
//     } catch (error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//   } else {
//     return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
//   }
// }


// import { insertDocument } from '@/components/hook/fetchMongoData';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req) {
//   if (req.method === 'GET') {
//     try {

//       const result = await insertDocument({
//         student_id: "5",
//         name: "saki"
//       });
//       // Insert the document
//       return NextResponse.json(result);
//     } catch (error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//   } else {
//     return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
//   }
// }


// import { NextRequest, NextResponse } from 'next/server';
// import { updateDocumentById } from '../../utils/fetchMongoData'; // Import the update function

// export async function POST(req) {
//   if (req.method === 'POST') {
//     try {
//       const { id, updateFields } = await req.json(); // Get id and update fields from request body

//       if (!id || !updateFields) {
//         return NextResponse.json({ message: 'Missing id or update fields' }, { status: 400 });
//       }

//       const result = await updateDocumentById(id, updateFields); // Update the document
//       return NextResponse.json(result);
//     } catch (error) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//   } else {
//     return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
//   }
// }

// export default function handler(req) {
//   return POST(req);
// }

// import { fetchMongoData } from '@/components/hook/getData';
// import { cookies } from 'next/headers'
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request) {
//   const cookieStore = cookies()
//   const token = cookieStore.get('token')
//   const result = await fetchMongoData();

//   return new Response(NextResponse.json(result), {
//     status: 200,
//     headers: { 'Set-Cookie': `token=${token}` },
//   })
// }

import { headers } from 'next/headers'
import { fetchMongoData } from '@/components/hook/getData';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req) {
  if (req.method === 'GET') {
    try {
      // Get cookies using the cookies() method
      const cookieStore = cookies();
      const token = cookieStore.get('token'); // Use cookieStore.get instead of req.cookies.get
      console.log('Token from cookies:', token);

      // Fetch data from MongoDB
      const result = await fetchMongoData();

      // Create a NextResponse object with the fetched data
      const response = NextResponse.json(result);

      // Set cookies
      response.cookies.set('token', 'tokenvalue', {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
        path: '/', // Ensure the cookie is accessible for your application
      });
      const headersList = headers()
      const referer = new Headers(req.headers)
      console.log(referer)

      // Set custom headers
      response.headers.set('X-Custom-Header', 'CustomHeaderValue');
      response.headers.set('Another-Header', 'AnotherHeaderValue');

      return response;
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}
