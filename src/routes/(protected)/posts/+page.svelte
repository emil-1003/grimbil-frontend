<script>
	import Post from "$lib/post.svelte"

	export let data;
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900">All Posts</h2>
			<a href="/posts/add" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 inline-block align-middle mr-2">
					<path fill-rule="evenodd" d="M11 9V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"/>
			  	</svg>
				Add Post
			</a>
		</div>
		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">      
			{#each data.posts as post}
				<Post id={post.id} title={post.title}/>
			{:else}
				<!-- this block renders when posts.length === 0 -->
				<p>loading...</p>
			{/each}
		</div>
	</div>
</div>

<style>

</style>