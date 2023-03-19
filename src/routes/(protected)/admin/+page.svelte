<script>
	import { page } from '$app/stores'
</script>

<h1>Admin</h1>

{#if $page.data.user}
	<p>Welcome {$page.data.user.name}!</p>
{/if}

{#if $page.data.user.role === 'admin'}
	<p>You have the admin role</p>
{/if}
