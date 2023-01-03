import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
});

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug([equals]${slug})` },
      // https://document.microcms.io/content-api/get-list-contents
      // queries
    });
    return post.contents[0];
  } catch (err) {
    console.log('~~ getPostBySlug ~~');
    console.log(err);
    // post.contents の文字を間違えたらエラーが出た
  }
}

export async function getPaths(perPage: () => number) {
  try {
    const repos = await client.get({ endpoint: 'blogs' });
    const range = (start: number, end: number) =>
      [...Array(end - start + 1)].map((_, i) => start + i);

    const paths = range(1, Math.ceil(repos.totalCount / perPage())).map(
      (repo) => `/blog/page/${repo}`
    );

    return paths;
  } catch (err) {
    console.log('~~ getPath ~~');
    console.log(err);
  }
}

export async function getAllPosts(limit: number, offset: number) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        // fields: 'title,slug,hero',
        orders: '-publishDate',
        offset: offset,
        limit: limit,
        // https://document.microcms.io/content-api/get-list-contents
      },
    });
    return posts;
  } catch (err) {
    console.log('~~ getAllPosts ~~');
    console.log(err);
  }
}
