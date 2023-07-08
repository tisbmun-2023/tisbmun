<script>
	import { page } from '$app/stores';
	import { nav } from '$lib/config/nav';
	import tisb from '$lib/images/tisb.png';
</script>

<header class="h-10 my-10 text-center text-2xl">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<div class="flex items-center space-x-6">
			<a href="/" class="flex items-center">
				<img src={tisb} class="h-6 sm:h-9" alt="TISB Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap text-white">TISBMUN 2023</span>
			</a>
			<nav>
				<ul class="hidden lg:flex items-center space-x-4">
					{#each nav as navItem}
						<li class="nav-item" aria-current={navItem.isOnPage($page.url.pathname) ? 'page' : undefined}>
							<a class="hover:text-amber-500" href={navItem?.url}>{navItem?.name}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
</style>