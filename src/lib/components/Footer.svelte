<script>
	import { socialMedia } from "$lib/config/sm";
	import Icon from "@iconify/svelte";
	import Link from "./Link.svelte";
</script>

<p>TISBMUN 2023 Team. Made by 
    <Link href="https://github.com/cheesycod">
        <strong>cheesycod</strong>!
    </Link>
</p>    

<div class="flex items-center space-x-2 relative">
    {#each socialMedia as sm}
        <a href={sm?.url} id={sm?.id + "-icon"}>
            <Icon icon={sm?.icon} inline={true} width={20} />
        </a>
    {/each}
</div>
