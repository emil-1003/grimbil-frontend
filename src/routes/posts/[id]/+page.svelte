<script>
    import { onMount } from 'svelte';
    export let data

    let post = {};
    onMount(async () => {
        const id = data.params.id
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		post = await res.json();
	});

</script>

<div class="post">
    <div class="bg-white">
        <div class="pt-6">         
            <!-- Image gallery -->
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                    <img src="/cars/car{data.params.id}.jpeg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img src="/cars/car{data.params.id}.jpeg"  alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
                    </div>
                    <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img src="/cars/car{data.params.id}.jpeg"  alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
                    </div>
                </div>
                <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                    <img src="/cars/car{data.params.id}.jpeg"  alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
                </div>
            </div>
      
            <!-- Product info -->
            <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Description</h1>
                    <h2>{post.title}</h2>
                </div>
      
                <!-- Options -->
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 class="sr-only">Product information</h2>
                    <p class="text-3xl tracking-tight text-gray-900">Comments</p>
            
                    <!-- Reviews -->
                    <div class="mt-6">
                        <h3 class="sr-only">Votes/Comments</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                            <!-- Active: "text-gray-900", Default: "text-gray-200" -->
                            🤮
                            🤮
                            🤮
                            🤮
                            ⚪️
                        </div>
                            <p class="sr-only">4 out of 5 stars</p>
                            <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                        </div>

                        <div class="mt-4 mb-4 bg-white shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 sm:px-6">
                              <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Emil
                              </h3>
                              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                                10.10.2002
                              </p>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                              <dl class="sm:divide-y sm:divide-gray-200">
                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    Comment:
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa eaque cum magnam iure asperiores a nesciunt voluptates exercitationem odit?
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>

                          <div class="mt-4 mb-4 bg-white shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 sm:px-6">
                              <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Emil
                              </h3>
                              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                                10.10.2002
                              </p>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                              <dl class="sm:divide-y sm:divide-gray-200">
                                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt class="text-sm font-medium text-gray-500">
                                    Comment:
                                  </dt>
                                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa eaque cum magnam iure asperiores a nesciunt voluptates exercitationem odit?
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                          
                    </div>
                </div>
        
                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                    <!-- Description and details -->
                    <div>
                        <h3 class="sr-only">Description</h3>
                        <div class="space-y-6">
                            <p class="text-base text-gray-900">{post.body}</p>
                        </div>
                    </div>
            
                    <div class="mt-10">
                        <h3 class="text-sm font-medium text-gray-900">Stats/specs</h3>
            
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
            </div>
        </div>
    </div>
</div>

<style>

</style> 