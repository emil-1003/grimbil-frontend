<script>
    import "../styles/global.css"
    import { onMount } from 'svelte';
    import Header from "$lib/header.svelte"
    import Footer from "$lib/footer.svelte"

    let jwtExists = false;
	onMount(async () => {
        const cookies = document.cookie.split('; ');
        jwtExists = cookies.some(cookie => cookie.startsWith('jwt='));
	});
</script>

<Header isAuthorized={jwtExists}/>
  
<main>
    <!-- page content -->
    <slot />
</main>

<Footer />

<style>

</style>