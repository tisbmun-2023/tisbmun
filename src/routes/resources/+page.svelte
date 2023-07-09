<script>

	import { resources } from "$lib/config/resources";

</script>
<h1 class="text-8xl text-center">MUN Resources</h1>

{#each resources as r}
    <a href={r.url} class="flex flex-col items-center justify-center space-y-4">
        <h2 class="text-2xl">{r.name}</h2>
        <img src={r.imageUrl} class="h-36 w-36" alt={r.name} />
        {#if r.description}
            <p class="text-xl">{r.description}</p>
        {/if}
    </a>
{/each}