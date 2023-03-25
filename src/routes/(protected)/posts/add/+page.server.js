import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}
}

const create = async ({ request, locals }) => {
	const data = await request.formData()
	const make = data.get('make')
	const model = data.get('model')
	const year = data.get('year')
	const mileage = data.get('mileage')
	const hp = data.get('hp')
	const plate = data.get('plate')
	const description = data.get('description')
	const base64 = data.get('base64')

	const base64Arr = base64.split("data:image/jpeg;base64,");
	base64Arr.shift(); // remove the first empty element from the array

	const title = `${make} ${model} ${year} ${mileage} ${hp} ${plate}`
	const content = `${description}`

	// MAKE POST CREATE POST REQUEST
	const response = await fetch('http://78.31.254.83:40080/Posts/CreatePost', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${locals.user.jwt}`
		},
		body: JSON.stringify({ title: title, content: content, pictures: base64Arr })
	});
	
	if (!response.ok) {
		console.log(response.status)
		return fail(400, { error: true });
	}

	console.log("redirect to /posts")
	// redirect the user
	throw redirect(302, '/posts')
}

export const actions = { create }
