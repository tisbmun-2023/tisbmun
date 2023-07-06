<script>
	import { dates, time } from "$lib/config/indexPage";
</script>
<svelte:head>
	<title>TISBMUN 2022</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article id="welcome-article">
	<h1 class="text-8xl font-bold text-center">TISB</h1>
	<h2 class="text-4xl font-semibold text-center">PRESENTS</h2>
	<div class="mt-7 mb-7"></div>
	<h3 id="event-name" class="text-6xl lg:text-9xl font-semibold text-center">TISBMUN 2023</h3>
	<div class="mb-24"></div>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold text-center" >
		Date: {dates}
	</p>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold text-center">
		Time: {time}
	</p>
</article>
<article id="secretariat letter">
	
</article>

