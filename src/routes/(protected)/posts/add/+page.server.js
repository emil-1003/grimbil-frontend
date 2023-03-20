import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/')
	}
}

const create = async ({ request }) => {
	const data = await request.formData()
	const make = data.get('make')
	const model = data.get('model')
	const year = data.get('year')
	const mileage = data.get('mileage')
	const hp = data.get('hp')
	const plate = data.get('plate')
	const description = data.get('description')
	const images = data.get('multiple_files')

	console.log(make, model, year, mileage, hp, plate, description, images)

	// redirect the user
	throw redirect(302, '/posts')
}

export const actions = { create }
