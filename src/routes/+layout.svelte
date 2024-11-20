<script lang="ts">
	import '$lib/styles/app.css';
	import Footer from '$src/lib/components/Footer.svelte';
	import Header from '$src/lib/components/Header.svelte';

	let { children } = $props();
</script>

<div class="flex h-full w-full flex-col bg-slate-50">
	<Header />
	<main class="mx-auto mt-10 w-full max-w-7xl">
		{@render children()}
	</main>
	<Footer />
</div>
