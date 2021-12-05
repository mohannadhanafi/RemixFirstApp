export type Post = {
  title: string;
  slug: string;
};

export const getPosts = () => {
  const posts: Post[] = [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
  return posts;
};
