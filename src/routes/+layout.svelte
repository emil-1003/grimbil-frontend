<script>
    import "../styles/global.css"
    import Header from "$lib/header.svelte"
    import Footer from "$lib/footer.svelte"
</script>

<Header />
  
<main>
    <!-- page content -->
    <slot />
</main>

<Footer />

<style>

</style>