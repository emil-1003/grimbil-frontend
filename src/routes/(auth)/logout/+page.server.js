import { redirect } from '@sveltejs/kit'

export const load = async () => {
	// we only use this endpoint for the api
	// and don't need to see the page
	throw redirect(302, '/')
}

export const actions = {
	default({ cookies }) {
		// eat the cookie
		cookies.set('jwt', '', {
			path: '/',
			domain: "home.storgaardandersen.dk",
			expires: new Date(0),
		})

		console.log("eat cookie")

		// redirect the user
		throw redirect(302, '/login')
	},
}
