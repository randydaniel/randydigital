<script>
	import '$lib/scss/global.scss';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>


<svelte:head>
	<title>Randy Daniel — Product & Interaction Designer</title>
</svelte:head>

<Navigation />
<main class="flex flex-col">
  <slot />
</main>
<Footer />