<script lang="ts">
	export let showArrow: boolean = false;

	export let href: string;

	const onClick = () => {
		window.location.href = href;
	};
</script>

<a {href}>
	<button
		on:click={onclick}
		class="mb-2 inline-flex items-center rounded-md bg-stone-950 px-3 py-2 text-center text-3xl font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-blue-800"
	>
		<slot />

		{#if showArrow}
			<svg
				aria-hidden="true"
				class="-mr-1 ml-2 h-4 w-4"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		{/if}
	</button>
</a>

<style>
</style>
