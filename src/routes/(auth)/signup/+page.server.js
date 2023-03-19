import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

const signup = async ({ request }) => {
	const data = await request.formData()
	const email = data.get('email')
	const password = data.get('password')
	const repeatPassword = data.get('repeat-password')

	console.log(repeatPassword)

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { invalid: true });
	}

	if (password !== repeatPassword) {
		return fail(400, { pwdMatch: true });
	}

	// MAKE POST SIGNUP REQUEST
	const response = await fetch('http://localhost:8585/api/v1/signup', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name: email, email: email, password: password })
	});
	
	if (!response.ok) {
		console.log(response.status)
		return fail(400, { user: true });
	}

	throw redirect(303, '/login')
}

export const actions = { signup }
