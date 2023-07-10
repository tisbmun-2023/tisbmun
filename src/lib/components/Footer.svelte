<script>
	import { socialMedia } from '$lib/config/sm';
	import Icon from '@iconify/svelte';
	import Link from './Link.svelte';
</script>

<p>
	TISBMUN 2023
</p>

<div class="relative flex items-center space-x-2">
	{#each socialMedia as sm}
		<a href={sm?.url} id={sm?.id + '-icon'}>
			<Icon icon={sm?.icon} inline={true} width={20} />
		</a>
	{/each}
</div>
