// components/RevalidateButton.js
'use server'

import { revalidateTag } from 'next/cache';

export default async function revalidatesk() {
    await revalidateTag('a');
}
