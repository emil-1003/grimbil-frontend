<script>
	import { page } from '$app/stores'

    export let data
</script>

<div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Top 5 Posts</h2>
            {#if $page.data.user}
            <a href="/posts/add" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 inline-block align-middle mr-2">
                    <path fill-rule="evenodd" d="M11 9V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"/>
                    </svg>
                Add Post
            </a>
            {/if}
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">      
        {#each data.posts as post}
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

<style>

</style>