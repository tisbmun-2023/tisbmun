<script lang="ts">
    export let image: string;
    export let imageAlt: string;
    export let heading: string;
</script>

<article class="content flex">
    <div class="ml-5 px-1">
        <h1 class="text-3xl inline">{heading}</h1>
        <p>
            <slot />
        </p>    
    </div>
    <img src={image} alt={imageAlt} class="px-2 rounded-[10%] w-28 h-28 lg:w-72 lg:h-72 m-10" />
</article>