<script>
	import Footer from "$lib/components/Footer.svelte";
	import "../app.postcss";
	import "$lib/css/vars.css"
	import "$lib/css/fonts.css"
    import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Playfair%20Display&display=swap");
    </style>
</svelte:head>

<div class="flex flex-col h-screen justify-between bg-gradient-to-b from-violet-900 via-blue-700 to-blue-400 text-white overflow-x-hidden">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<footer class="mb-auto bg-gradient-to-b from-stone-950 to-stone-800">
		<Footer />
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
