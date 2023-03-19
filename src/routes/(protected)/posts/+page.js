export async function load() {
    let posts = [];

    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await res.json();
    posts = data.slice(0,12)
    return {
      posts
    };
}