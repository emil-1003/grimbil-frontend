import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}

	let posts = [];

	const res = await fetch(`http://78.31.254.83:40080/Posts/AllUsersposts`, {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
	});

	posts = await res.json()
  
	return {
	  posts
	};
}