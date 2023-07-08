<script>
	import Button from "$lib/components/Button.svelte";
	import ImagePara from "$lib/components/ImagePara.svelte";
	import { dates, register, time } from "$lib/config/indexPage";
	import catimg1 from "$lib/images/cat1.jpg";
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
	<div class="mb-12"></div>
	<div class="text-center">
		<Button href={register} showArrow={true}>Register Now</Button>
	</div>
	<div class="mt-12"></div>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold text-center">
		Date: {dates}
	</p>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold text-center">
		Time: {time}
	</p>
</article>

<ImagePara image={catimg1} imageAlt="Cat sample foobar">
	You may love your cat, but you may not be fully aware of just how cool your she — and her overall species — really is. For example, did you know that cats have an extra organ that allows them to taste scents? Or that they developed meowing as a way to communicate exclusively with humans?

Clearly, there’s more to your little feline friend than meets the eye. So, to help you fully appreciate how awesome cats are, we asked cat care professionals on Care.com — namely, cat sitters, boarders, and groomers — to share their favorite fun facts about these mystical creatures. We then pulled together a list of the 101 most amusing cat facts that you can share with your friends and family.

Facts About Cat Anatomy & Physiology

A house cat’s genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors, says Layla Morgan Wilde, a cat behavior expert and the founder of Cat Wisdom 101. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking.
</ImagePara>

<ImagePara image={catimg1} imageAlt="Cat sample foobar">
	You may love your cat, but you may not be fully aware of just how cool your she — and her overall species — really is. For example, did you know that cats have an extra organ that allows them to taste scents? Or that they developed meowing as a way to communicate exclusively with humans?

Clearly, there’s more to your little feline friend than meets the eye. So, to help you fully appreciate how awesome cats are, we asked cat care professionals on Care.com — namely, cat sitters, boarders, and groomers — to share their favorite fun facts about these mystical creatures. We then pulled together a list of the 101 most amusing cat facts that you can share with your friends and family.

Facts About Cat Anatomy & Physiology

A house cat’s genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors, says Layla Morgan Wilde, a cat behavior expert and the founder of Cat Wisdom 101. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking.
</ImagePara>








