<script>
	import Header from "$lib/header.svelte"
	import Footer from "$lib/footer.svelte"

	import '../styles/app.css'
</script>

<svelte:head>
	<title>Grimbil</title>
</svelte:head>

<Header />

<main>
    <!-- page content -->
    <slot />
</main>

<Footer />

<style>

</style>
