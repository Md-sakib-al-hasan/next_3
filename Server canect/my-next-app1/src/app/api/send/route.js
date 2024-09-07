// app/api/send/route.js
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
    const { message } = await request.json();

    // Simulate server processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return NextResponse.json({ sakib: 'sakib al hasan' });
}
