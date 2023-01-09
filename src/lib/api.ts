import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
});

export async function getPaths(type:string,directory: string, pathName?: number) {
  try {
    const repos = await client.get({ endpoint: 'blogs' });
    let paths;

    if (type === 'page'  && typeof pathName === 'number') {
      const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i);

      paths = range(1, Math.ceil(repos.totalCount / pathName)).map(
        (repo) => `/${directory}/${repo}`
      );
    } else if (type === 'tag'){
      paths = repos.contents.map((content: { tags: { slug: string }[] }) => {
        return `/${directory}/${content.tags[0].slug}`;
      });
    } else if (type === 'article'){
      paths = repos.contents.map(
        (content: { slug: string }) => `/${directory}/${content.slug}`
      );
    }

    return paths;
  } catch (err) {
    console.log('~~ getPath ~~');
    console.log(err);
  }
}

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

export async function getAllPosts(limit: number, offset: number) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,hero,publishDate,tags',
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

export async function getPost(slug: string) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    });
    return post;
  } catch (err) {
    console.log('~~ getPost ~~');
    console.log(err);
  }
}

export async function getAllTags() {
  try {
    const tags = await client.get({
      endpoint: 'tags',
      queries: {
        fields: 'id,name,slug,',
      },
    });
    return tags.contents;
  } catch (err) {
    console.log('~~ getAllTags ~~');
    console.log(err);
  }
}

export async function getAllPostsByTag(tagId: string) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `tags[contains]${tagId}`,
        fields: 'title,slug,hero,publishDate,tags',
        orders: '-publishDate',
      },
    });
    return { posts: posts.contents, totalCount: posts.totalCount };
  } catch (err) {
    console.log('~~ getAllPostsByTag ~~');
    console.log(err);
  }
}
