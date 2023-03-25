import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

const login = async ({ cookies, request }) => {
	const data = await request.formData()
	const email = data.get('email')
	const password = data.get('password')

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { invalid: true })
	}

	// MAKE POST LOGIN REQUEST
	const response = await fetch('http://localhost:5036/Auth/Login', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({ userEmail: email, password: password })
	});
	
	if (!response.ok) {
		return fail(400, { credentials: true });
	}

	// get response text
	const token = await response.json();

	cookies.set('jwt', token[0], {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: process.env.NODE_ENV === 'production',
		// set cookie to expire after 60min
		maxAge: 60 * 60,
	})

	// redirect the user
	throw redirect(302, '/')
}

export const actions = { login }
