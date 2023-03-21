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
			httpOnly: true,
			//expires: new Date(Date.now() - 3600000), // new Date(0)
			maxAge: 0,
			secure: process.env.NODE_ENV === 'production',
		})

		// redirect the user
		throw redirect(302, '/login')
	},
}
