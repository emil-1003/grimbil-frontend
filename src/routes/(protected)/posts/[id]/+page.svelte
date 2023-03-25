<script>
    import { page } from '$app/stores'

    import Comment from "$lib/comment.svelte"
    export let data
    export let form

    let ratingString = '';

    // TODO: virker ikke ordentligt hvis den gennemsnitlige rating har decimaler
    for (let i = 0; i < data.post.rating; i++) {
        ratingString += '🤮';
    }

    // TODO: fix fordi rating kan være NaN
    if (isNaN(data.post.rating)) {
        data.post.rating = 0;
    }

    for (let i = data.post.rating; i < 5; i++) {
        ratingString += '⚪️';
    }

    let rating
</script>

<div class="post">
    <div class="bg-white">
        <div class="pt-6">         
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

                {#if data.post.pictures.length > 3}
                    <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <img src="data:image/jpeg;base64,{data.post.pictures[3].picture1}" alt="Car" class="h-full w-full object-cover object-center">
                    </div>
                {/if}

                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">

                    {#if data.post.pictures.length > 2}
                        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <img src="data:image/jpeg;base64,{data.post.pictures[2].picture1}"   alt="Car" class="h-full w-full object-cover object-center">
                        </div>
                    {/if}

                    {#if data.post.pictures.length > 1}
                        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <img src="data:image/jpeg;base64,{data.post.pictures[1].picture1}" alt="Car" class="h-full w-full object-cover object-center">
                        </div>
                    {/if}

                </div>

                {#if data.post.pictures.length > 0}
                    <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img src="data:image/jpeg;base64,{data.post.pictures[0].picture1}"  alt="Car" class="h-full w-full object-cover object-center">
                    </div>
                {/if}

            </div>
      
            <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <div class="flex items-center justify-between">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Description</h1>

                        {#if $page.data.user}
                            {#if $page.data.user.role == 1 || data.user.uid == data.post.user.userid}
                            <form
                            class=""
                            action="?/deletepost"
                            method="POST">
                                <button type="submit" class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Delete
                                </button>
                            </form>
                            {/if}
                        {/if}

                    </div>
                    <h2>{data.post.title}</h2>
                
                    <div class="space-y-6 mt-4">
                        <p class="text-base text-gray-900">{data.post.description}</p>
                    </div>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">       
                    <div class="mt-10">
                        <h3 class="text-sm font-medium text-gray-900">Information</h3>
                    
                        <div class="mt-4">
                            <ul class="list-disc space-y-2 pl-4 text-sm">
                                <li class="text-gray-400"><span class="text-gray-600">Posted by: {data.post.user.useremail}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
      
                <!-- Options -->
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <p class="text-3xl tracking-tight text-gray-900">Comments</p>
            
                    <div class="mt-6">

                        <div class="flex items-center">
                            {ratingString}
                            <p class="ml-2 text-sm font-medium text-gray-500">{data.post.rating} out of 5</p>
                        </div>

                        <form
                            action="?/rate"
                            method="POST">
                            <div class="flex flex-row-reverse justify-center p-10">
                                <input type="submit" on:click={() => (rating = 5)} class="text-5xl opacity-50 peer peer-hover:opacity-100 hover:opacity-100 mx-2" value="🤮">
                                <input type="submit" on:click={() => (rating = 4)} class="text-5xl opacity-50 peer peer-hover:opacity-100 hover:opacity-100 mx-2" value="🤮">
                                <input type="submit" on:click={() => (rating = 3)} class="text-5xl opacity-50 peer peer-hover:opacity-100 hover:opacity-100 mx-2" value="🤮">
                                <input type="submit" on:click={() => (rating = 2)} class="text-5xl opacity-50 peer peer-hover:opacity-100 hover:opacity-100 mx-2" value="🤮">
                                <input type="submit" on:click={() => (rating = 1)} class="text-5xl opacity-50 peer peer-hover:opacity-100 hover:opacity-100 mx-2" value="🤮">
                                <input type="hidden" name="rating" id="rating" value={rating}>
                            </div> 
                        </form>

                        <div class="mt-4 mb-4 bg-white shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 sm:px-6">
                                <form action="?/comment" method="POST">
                                    <div class="mb-6">
                                        <label for="comment" class="block mb-2 text-sm font-medium text-gray-900">Write a comment</label>
                                        <textarea id="content" name="content" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write a comment" required />
                                    </div>

                                    {#if form?.error}
                                    <p class="error">Failed to create comment.</p>
                                    {/if}
                                        
                                    <div>
                                        <button type="submit" class="group relative flex w-full justify-center rounded-md bg-blue-700 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {#each data.post.comments as comment}
                            <Comment name={comment.userid} date="10.10.2002" comment={comment.comment1} />
                        {/each}

                    </div>
                </div>
        

            </div>
        </div>
    </div>
</div>

<style>

</style> 