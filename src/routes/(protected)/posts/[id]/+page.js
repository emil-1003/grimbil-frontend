export const load = async ({params}) => {
    let post = {};
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await res.json();
    
    return {
        post
    }
}