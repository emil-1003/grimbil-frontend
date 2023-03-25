<script>
	export let year = "year"
	export let name = "domain"
	export let text = "text"
</script>

<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:items-center md:justify-between md:p-6">
    <span class="block text-sm text-gray-500 sm:text-center">© {year} <a href="/" class="hover:underline">{name} </a>{text}</span>
</footer>