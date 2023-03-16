<script>
    export let id = 0
</script>

<div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="/cars/car{id}.jpeg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
    </div>
    <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src="/cars/car{id}.jpeg"  alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src="/cars/car{id}.jpeg"  alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
    </div>
    <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img src="/cars/car{id}.jpeg"  alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
    </div>
</div>