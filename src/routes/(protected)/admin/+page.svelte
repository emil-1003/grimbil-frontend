<script>
	export let data
</script>

<div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">All Users</h2>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">      
        {#each data.users as user}

		<div>
			<div class="rounded-t-lg p-8 bg-gray-100 shadow">
				<div class="p-4">
					<div class="mb-4 text-center opacity-90">
						<img alt="profil" src="/user.jpeg" class="mx-auto object-cover rounded-full h-16 w-16 "/>
					</div>
					<div class="text-center">
						<p class="text-2xl text-gray-800 dark:text-white">
							UserID: {user.userid}
						</p>
						<p class="text-xl font-light text-gray-500 dark:text-gray-200">
							Email: {user.useremail}
						</p>
						<p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
							Type: {user.usertype}
						</p>
					</div>
				</div>
			</div>
			<div class="px-4 py-3 rounded-b-lg bg-gray-50 sm:px-6 sm:flex justify-center">

				<form action="?/deleteuser" method="POST">
					<input type="hidden" name="userid" id="userid" value={user.userid}>
					<button type="submit" class="w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
						Delete
					</button>
				</form>

				{#if user.usertype != 2}
					<form action="?/blockuser" method="POST">
						<input type="hidden" name="userid" id="userid" value={user.userid}>
						<button type="submit" class="w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
							Block
						</button>
					</form>
				{/if}

				{#if user.usertype == 2}
					<form action="?/unblockuser" method="POST">
						<input type="hidden" name="userid" id="userid" value={user.userid}>
						<button type="submit" class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
							Unblock
						</button>
					</form>
				{/if}

			</div>
		</div>
		
        {:else}
            <!-- this block renders when posts.length === 0 -->
            <p>Loading</p>
        {/each}
        </div>
    </div>
</div>

<style>

</style>