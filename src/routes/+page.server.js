export const load = async () => {
  let posts = [];

  const res = await fetch(`http://localhost:5036/Posts/AllPosts`);
  posts = await res.json()

  return {
    posts
  };
}