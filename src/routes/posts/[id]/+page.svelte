<script>
    import { onMount } from 'svelte';
    import Comment from "$lib/comment.svelte"
    import ImageGallery from '$lib/imagegallery.svelte';
    import List from "$lib/list.svelte"
    import Reviews from "$lib/reviews.svelte"
    import PostDescription from '$lib/postdescription.svelte';
    export let data

    let jwtExists = false;
    let post = {};
    onMount(async () => {
        const cookies = document.cookie.split('; ');
        jwtExists = cookies.some(cookie => cookie.startsWith('jwt='));
		if (!jwtExists) {
			window.location.href = "/";
		}

        const id = data.params.id
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		post = await res.json();
	});

</script>

<div class="post">
    <div class="bg-white">
        <div class="pt-6">         
            <ImageGallery id={post.id}/>
      
            <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <PostDescription title={post.title} info={post.body}/>
      
                <!-- Options -->
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <p class="text-3xl tracking-tight text-gray-900">Comments</p>
            
                    <div class="mt-6">
                        <Reviews />

                        <Comment name="Emil" date="10.10.2002" comment="Det er da den grimmeste bil jeg længe har set!!" />
                        <Comment name="Jens" date="10.11.2002" comment="Så grim er den sgu da heller ikke!" />

                    </div>
                </div>
        
                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">       
                    <List name="Stats/Specs"/>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

</style> 