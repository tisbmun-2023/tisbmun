<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<slot />
</a>

<style>
	a {
		color: var(--metallic-gold);
		text-decoration: none;
		background-color: transparent;
	}

	a:hover {
		color: #28c946;
		text-decoration: underline;
	}
</style>
