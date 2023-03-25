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

<Footer year="2023" name="Grimbil.dk" text="Alexander Olsen - Emil Andersen" />

<style>

</style>
