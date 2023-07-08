<script lang="ts">
    export let image: string;
    export let imageAlt: string;
</script>

<article class="content flex py-2">
    <img width={"500px"} src={image} alt={imageAlt} class="item-body px-2 "/>
    <div class="item-body">
        <slot />
    </div>
</article>