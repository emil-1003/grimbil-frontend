<script context="module">
    export function load({ error }) {
        return {
            props: { message: error.message }
        };
    }
</script>

<script>
    export let message
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8 bg-gray-50 border border-gray-300 p-6 rounded-lg">

        <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div class="max-w-md text-center">
                    <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span class="sr-only">Error</span>404
                    </h2>
                    <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <a rel="noopener noreferrer" href="/" class="px-8 py-3 text-blue-700 font-semibold rounded">Back to homepage</a>
                </div>
            </div>
        </section>

    </div>
</div>