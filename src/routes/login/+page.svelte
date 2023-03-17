<script>
    import Login from "$lib/login.svelte"
    import AuthHeader from "$lib/authheader.svelte"

</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8 bg-gray-50 border border-gray-300 p-6 rounded-lg">
        <h1 class="font-extrabold">Test User</h1>
        <p><b>Username:</b> email@email.com<br><b>Password:</b> 1234</p>
    </div>
</div>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full bg-gray-50 max-w-md space-y-8 border border-gray-300 p-6 rounded-lg">
        <AuthHeader title="Login"/>
        <Login />
    </div>
</div>

<style>

</style>