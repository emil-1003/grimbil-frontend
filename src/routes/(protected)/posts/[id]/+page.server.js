import { redirect } from '@sveltejs/kit'

export const load = async ({ params, locals }) => {
	let post = {};
    const id = params.id

    try {
        const res = await fetch(`http://78.31.254.83:40080/Posts/GetPost?postid=${id}`);
        post = await res.json();

        return {
            post
        }
    } catch(error) {
		console.log("øv",error)
    }
}

const comment = async ({ request, params, locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	}

	const data = await request.formData()
	const content = data.get('content')
	const id = params.id

	// MAKE POST COMMENT REQUEST
	const response = await fetch('http://78.31.254.83:40080/Posts/CreateComment', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
		body: JSON.stringify({ postId: id, title: content, content: content })
	});
	
	if (!response.ok) {
		console.log(response.status)
		return fail(400, { error: true });
	}

	// redirect the user
	throw redirect(302, `/posts/${id}`)
}

const rate = async ({ request, params, locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login')
	}

	const data = await request.formData()
	const rating = data.get('rating')
	const id = params.id

	// MAKE POST COMMENT REQUEST
	const response = await fetch('http://78.31.254.83:40080/Posts/CreateRating', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
		body: JSON.stringify({ rating: rating, postId: id })
	});
	
	if (!response.ok) {
		console.log(response.status)
		return fail(400, { error: true });
	}

	// redirect the user
	throw redirect(302, `/posts/${id}`)
}

const deletepost = async ({ params, locals }) => {
	const id = params.id

	// MAKE DELTE USER REQUEST
	const response = await fetch(`http://78.31.254.83:40080/Posts/DeletePost?postid=${id}`, {
		method: 'DELETE',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
	});
	
	if (!response.ok) {
		console.log(response.status)
		return fail(400, { error: true });
	}

	// redirect the user
	throw redirect(302, `/`)
}

export const actions = { comment, rate, deletepost }