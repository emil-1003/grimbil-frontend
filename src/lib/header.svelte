<script>
	import { page } from '$app/stores'

    let isMenuOpen = false

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    let current = 0
</script>

<header>
    <nav class="bg-gray-900 px-2 sm:px-4 py-2.5">
        <div class="container flex flex-wrap items-center justify-between mx-auto">

            <!-- Logo -->
            <a href="/" on:click={() => (isMenuOpen = false, current = 0)} class="flex items-center">
                <img src="/white-car-30.png" class="h-6 mr-3 sm:h-9" alt="logo">
                <span class="text-white self-center text-xl font-semibold whitespace-nowrap">Grimbil</span>
            </a>

            <!-- Mobile menu button -->
            <button on:click={toggleMenu} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>  
            
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto`} id="navbar-default">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                    <li on:click={() => (isMenuOpen = false)}>
                        <a href="/about" on:click={() => (current = 1)} class={`${current === 1 ? 'text-blue-700' : 'text-gray-700'} font-extrabold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>About</a>
                    </li>
                    
                    {#if !$page.data.user}
                        <li on:click={() => (isMenuOpen = false)}>
                            <a href="/login" on:click={() => (current = 2)} class={`${current === 2 ? 'text-blue-700' : 'text-gray-700'} font-extrabold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Login</a>
                        </li>
                        <li on:click={() => (isMenuOpen = false)}>
                            <a href="/signup" on:click={() => (current = 3)} class={`${current === 3 ? 'text-blue-700' : 'text-gray-700'} font-extrabold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Signup</a>
                        </li>
                    {/if}
            
                    {#if $page.data.user}
                        {#if $page.data.user.role == 1}
                        <li on:click={() => (isMenuOpen = false)}>
                            <a href="/admin" on:click={() => (current = 4)} class={`${current === 4 ? 'text-blue-700' : 'text-gray-700'} font-extrabold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Admin</a>
                        </li>
                        {/if}
                        <li on:click={() => (isMenuOpen = false)}>
                            <a href="/posts" on:click={() => (current = 5)} class={`${current === 5 ? 'text-blue-700' : 'text-gray-700'} font-extrabold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Posts</a>
                        </li>
                        <li on:click={() => (isMenuOpen = false)}>
                            <form action="/logout" method="POST">
                                <button type="submit" on:click={() => (current = 0)} class="text-gray-700 font-extrabold block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Log out</button>
                            </form>
                        </li>
                    {/if}
                </ul>
            </div>

        </div>
    </nav>
</header>