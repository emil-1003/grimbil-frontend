import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {

	// redirect user if not logged in
	if (locals.user.role != 1) {
		throw redirect(302, '/')
	}

	let users = [];
  
	const res = await fetch('http://78.31.254.83:40080/User/GetAllUsers', {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
	});

	users = await res.json()
  
	return {
	  users
	};
}

const deleteuser = async ({ request, locals }) => {
	const data = await request.formData()
	const userid = data.get('userid')

	// MAKE DELTE USER REQUEST
	const response = await fetch(`http://78.31.254.83:40080/User/DeleteUser?userId=${userid}`, {
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
	throw redirect(302, `/admin`)
}

const blockuser = async ({ request, locals }) => {
	const data = await request.formData()
	const userid = data.get('userid')

	// MAKE BLOCK USER REQUEST
	const response = await fetch(`http://78.31.254.83:40080/User/BlockUser?userid=${userid}`, {
		method: 'GET',
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
	throw redirect(302, `/admin`)
}

const unblockuser = async ({ request, locals }) => {
	const data = await request.formData()
	const userid = data.get('userid')

	// MAKE BLOCK USER REQUEST
	const response = await fetch(`http://78.31.254.83:40080/User/UnblockUser?userid=${userid}`, {
		method: 'GET',
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
	throw redirect(302, `/admin`)
}


export const actions = { deleteuser, blockuser, unblockuser }