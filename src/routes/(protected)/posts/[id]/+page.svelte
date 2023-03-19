<script>
    import Comment from "$lib/comment.svelte"
    export let data
</script>

<div class="post">
    <div class="bg-white">
        <div class="pt-6">         
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                    <img src="/cars/car{data.post.id}.jpeg" alt="Car" class="h-full w-full object-cover object-center">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img src="/cars/car{data.post.id}.jpeg"  alt="Car" class="h-full w-full object-cover object-center">
                    </div>
                    <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img src="/cars/car{data.post.id}.jpeg"  alt="Car" class="h-full w-full object-cover object-center">
                    </div>
                </div>
                <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                    <img src="/cars/car{data.post.id}.jpeg"  alt="Car" class="h-full w-full object-cover object-center">
                </div>
            </div>
      
            <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Description</h1>
                    <h2>{data.post.title}</h2>
                
                    <div class="space-y-6 mt-4">
                        <p class="text-base text-gray-900">{data.post.body}</p>
                    </div>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">       
                    <div class="mt-10">
                        <h3 class="text-sm font-medium text-gray-900">Stats/Specs</h3>
                    
                        <div class="mt-4">
                            <ul class="list-disc space-y-2 pl-4 text-sm">
                                <li class="text-gray-400"><span class="text-gray-600">120 HK</span></li>
                                <li class="text-gray-400"><span class="text-gray-600">105 NM</span></li>
                                <li class="text-gray-400"><span class="text-gray-600">24,4 km/l</span></li>
                                <li class="text-gray-400"><span class="text-gray-600">104.000 km</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
      
                <!-- Options -->
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <p class="text-3xl tracking-tight text-gray-900">Comments</p>
            
                    <div class="mt-6">
                        <div class="flex items-center">
                            <div class="flex items-center">
                            <!-- Active: "text-gray-900", Default: "text-gray-200" -->
                            🤮
                            🤮
                            🤮
                            🤮
                            ⚪️
                        </div>
                            <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                        </div>

                        <Comment name="Emil" date="10.10.2002" comment="Det er da den grimmeste bil jeg længe har set!!" />
                        <Comment name="Jens" date="10.11.2002" comment="Så grim er den sgu da heller ikke!" />

                    </div>
                </div>
        

            </div>
        </div>
    </div>
</div>

<style>

</style> 