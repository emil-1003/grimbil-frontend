<script>
    import "../styles/global.css"
    import { onMount } from 'svelte';
    import Header from "$lib/header.svelte"
    import Footer from "$lib/footer.svelte"
    //import jwt from 'jsonwebtoken';

    let jwtExists = false;
    let jwtToken = '';
	onMount(async () => {
        const cookies = document.cookie.split('; ');
        jwtExists = cookies.some(cookie => cookie.startsWith('jwt='));
  
        /*if (jwtExists) {
            jwtToken = cookies.find(cookie => cookie.startsWith('jwt=')).split('=')[1];
            try {
                const decodedToken = jwt.verify(jwtToken, 'my-secret-key');
                const currentTime = Math.floor(Date.now() / 1000);
                if (decodedToken.exp < currentTime) {
                    // JWT token has expired
                    console.log("JWT token has expired")
                    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
                    window.location.href = "/";
                } else {
                    // JWT token is valid
                    console.log("JWT token is valid")
                }
            } catch (error) {
                // JWT token is invalid or has been tampered with
                console.log("JWT token is invalid")
                console.log(error)
                document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
                window.location.href = "/";
            }
        }*/
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