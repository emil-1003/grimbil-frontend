<script>
	import { onMount } from 'svelte';

	let posts = [];
	onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
		const data = await res.json();
        posts = data.slice(0,12)
	});

</script>

<div class="posts">
    <div class="bg-white">
    	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        	<h2 class="text-2xl font-bold tracking-tight text-gray-900">All Posts</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">      
				{#each posts as post}
                <div class="group relative">
            		<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              			<img src="/cars/car{post.id}.jpeg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            		</div>
            		<div class="mt-4 flex justify-between">
              			<div>
                			<h3 class="text-sm text-gray-700">
                  				<a href="/posts/{post.id}">
                    				<span aria-hidden="true" class="absolute inset-0"></span>
                    				{post.title}
                  				</a>
                			</h3>
                			<p class="mt-1 text-sm text-gray-500">Jonas</p>
              			</div>
              			<p class="text-sm font-medium text-gray-900">{post.id}.0 🤮</p>
            		</div>
          		</div>
        		{:else}
            		<!-- this block renders when posts.length === 0 -->
            		<p>loading...</p>
        		{/each}
          	</div>
        </div>
    </div>
</div>

<style>

</style>