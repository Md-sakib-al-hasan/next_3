// app/my-mdx-page-remote/page.js

import { MDXRemote } from 'next-mdx-remote/rsc';
import { compile } from 'xdm';

async function fetchRemoteMDX(url) {
    const res = await fetch(url);
    const markdown = await res.text();
    const compiledSource = await compile(markdown, { outputFormat: 'function-body' });
    return compiledSource;
}

export default async function RemoteMdxPage() {
    const mdxSource = await fetchRemoteMDX('https://example.com/remote-mdx-content');
    return <MDXRemote source={mdxSource} />;
}
