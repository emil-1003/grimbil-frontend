import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

const signup = async ({ request }) => {
	const data = await request.formData()
	const username = data.get('username')
	const password = data.get('password')

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true })
	}

	// MAKE POST SIGNUP REQUEST
	const response = await fetch('http://localhost:8585/api/v1/signup', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name: username, email: username, password: password })
	});
	
	if (!response.ok) {
		console.log(response.status)
		return fail(400, { user: true });
	}

	throw redirect(303, '/login')
}

export const actions = { signup }
