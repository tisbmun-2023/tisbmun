<script lang="ts">
	export let image: string;
	export let imageAlt: string;
	export let heading: string;
</script>

<article class="content flex">
	<div class="ml-5 px-1">
		<h1 class="inline text-3xl">{heading}</h1>
		<p>
			<slot />
		</p>
	</div>
	<img src={image} alt={imageAlt} class="m-10 h-28 w-28 rounded-[10%] px-2 lg:h-72 lg:w-72" />
</article>
