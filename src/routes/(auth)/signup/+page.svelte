<script>
	import Signup from "$lib/signup.svelte"
    import Authheader from "$lib/authheader.svelte";
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8 bg-gray-50 border border-gray-300 p-6 rounded-lg">
		<Authheader title="Signup"/>
		<Signup />
	</div>
</div>
