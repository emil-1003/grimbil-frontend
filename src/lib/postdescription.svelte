<script>
    export let title = "no title"
    export let info = "no info" 
</script>

<div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Description</h1>
    <h2>{title}</h2>

    <div class="space-y-6 mt-4">
        <p class="text-base text-gray-900">{info}</p>
    </div>
</div>