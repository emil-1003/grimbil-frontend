<script>
	export let form
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full bg-gray-50 max-w-md space-y-8 border border-gray-300 p-6 rounded-lg">

		<div>
			<img class="mx-auto h-12 w-auto" src="/black-car-30.png" alt="logo">
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				Or
				<a href="/" class="font-medium text-blue-600 hover:text-blue-500">visit as a guest</a>
			</p>
		</div>

		<form action="?/login" method="POST">
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
				<div class="relative">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
					</div>
					<input type="email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@email.com" required>
				</div>  
			</div>

			<div class="mb-6">
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
				<input type="password" id="password" name="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter password" required>
			</div>

			{#if form?.invalid}
				<p class="error">Email and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">You have entered the wrong credentials.</p>
			{/if}

			<div>
				<button type="submit" class="group relative flex w-full justify-center rounded-md bg-blue-700 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<svg class="h-5 w-5 text-blue-500 group-hover:text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
						</svg>
					</span>
					Login
				</button>
			</div>
		</form>

	</div>
</div>

<style>

</style>