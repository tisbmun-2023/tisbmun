<script lang="ts">
    export let image: string;
    export let imageAlt: string;
    export let heading: string;
</script>

<article class="content flex py-2">
    <div class="ml-7 px-3">
        <h1 class="text-3xl inline">{heading}</h1>
        <p>
            <slot />
        </p>    
    </div>
    <img src={image} alt={imageAlt} class="item-body px-2 rounded-[10%] float-left w-96 h-96 m-10"/>
</article>