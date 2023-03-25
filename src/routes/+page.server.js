export const load = async () => {
  let posts = [];

  const res = await fetch(`http://78.31.254.83:40080/Posts/AllPosts`);
  posts = await res.json()

  return {
    posts
  };
}