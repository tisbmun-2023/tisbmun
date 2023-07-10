<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.postcss';
	import '$lib/css/vars.css';
	import '$lib/css/fonts.css';
	import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
	<style>
        @import url("https://fonts.googleapis.com/css?family=Lexend%20Deca&display=swap");
    </style>
</svelte:head>

<div class="flex min-h-screen flex-col overflow-x-hidden bg-[#1c335b] text-white">
	<Header />
	<main>
		<slot />
	</main>
	<footer class="items-center bg-gradient-to-b from-stone-950 to-stone-800">
		<Footer />
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
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
