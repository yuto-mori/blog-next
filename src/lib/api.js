import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug([equals]${slug})` },
      // https://document.microcms.io/content-api/get-list-contents
      // queries
    });
    return post.contents[0];
  } catch (err) {
    console.log('-- getPostBySlug--');
    console.log(err);
    // post.contents の文字を間違えたらエラーが出た
  }
}
