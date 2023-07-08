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

<div class="mb-10"></div>


<ImagePara image={catimg1} imageAlt="Cat sample foobar" heading="Secretriat Letter">
	Dear delegates,<br/><br/>

	​
	
	TISBMUN is back.<br/><br/>
	
	​
	
	After a hiatus of two years of online conferences due to the pandemic, the Secretariat is proud and excited to announce that for its twelfth year, TISBMUN will be returning to an in-person format. Bigger, bolder and fresher than ever before, TISBMUN XXII promises to be the most memorable edition yet.<br/><br/>
	
	​
	
	Our passionate, dedicated Secretariat and organizing committee have been hard at work on making TISBMUN XXII a truly remarkable experience for all of you. TISBMUN’s seasoned and highly competent Executive Board, comprising some of the city’s most versatile and capable MUNners, has put together an exciting array of committees designed to cater to delegates of varied interests and experience levels. From our innovative yet classic General Assemblies – the perfect opportunity to practice your consensus-building skills and hone the fine art of diplomacy – to our dynamic, frenetic crisis committees, designed to keep even the most experienced of delegates perpetually on their toes, there truly is something for everybody at TISBMUN.
	<br/><br/>
	 
	
	Whether you prefer to debate economic policy following the COVID recovery, to navigate the hot-button issue that is the South China Sea crisis, or even to immerse yourself in the chaos and uncertainty of the USSR following the death of Josef Stalin, one thing is for certain. No matter what else you feel during your two days with us, you certainly won’t be bored.
	
	​<br/><br/>
	
	Above all else, we would encourage all of you to treat TISBMUN as an opportunity to learn more about the fascinating world of MUN – and about yourselves. For better or for worse, we live in uncertain times, and Model UN is an activity that helps develop precisely the global awareness, argumentation skills, and critical thinking ability needed to navigate them. Whether you’re a seasoned MUNner with more than 20 conferences under your belt, or TISBMUN is your first introduction to this exciting world, TISBMUN presents you with an unprecedented opportunity to step outside your comfort zone, to challenge yourself and learn more about what makes you – and the world around you – tick.
	
	​
	
	All the very best with your preparation for the conference, and please feel free to reach out with any queries or concerns you may have. We look forward to hosting you this December!
	
	​<br/><br/>
	
	Regards,
	<br/><br/>
	
	Rohan Doddavaram and Aditya Setlur
	<br/><br/>
	
	Co-Secretaries General, TISBMUN XXII
	<br/><br/>
		
</ImagePara>

<div class="mt-7"></div>

<ImagePara image={catimg1} imageAlt="Cat sample foobar" heading="Iain is cool">
	You may love your cat, but you may not be fully aware of just how cool your she — and her overall species — really is. For example, did you know that cats have an extra organ that allows them to taste scents? Or that they developed meowing as a way to communicate exclusively with humans?

Clearly, there’s more to your little feline friend than meets the eye. So, to help you fully appreciate how awesome cats are, we asked cat care professionals on Care.com — namely, cat sitters, boarders, and groomers — to share their favorite fun facts about these mystical creatures. We then pulled together a list of the 101 most amusing cat facts that you can share with your friends and family.

Facts About Cat Anatomy & Physiology

A house cat’s genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors, says Layla Morgan Wilde, a cat behavior expert and the founder of Cat Wisdom 101. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking.
</ImagePara>








