<script>
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import BrandingImg from '$lib/assets/images/rd.svg';
</script>

<nav class="border-y border-grid-lines sticky top-0 z-10">
  <div class="container">
    <ul class="grid grid-cols-6 font-display border-x border-grid-lines">
      <li class="col-span-2 border-r border-grid-lines"><div class="flex justify-center h-full w-full"><img class="branding" src={BrandingImg} alt="Randy Digital" /></div></li>
      <li class="border-r border-grid-lines"><a href="#select-works" class="block p-8 w-full h-full text-center text-2xl hover:bg-primary transition transition-duration-300 ease-in-out">Select Works</a></li>
      <li class="border-r border-grid-lines"><a href="#select-works" class="block p-8 w-full h-full text-center text-2xl hover:bg-primary transition transition-duration-300 ease-in-out hover:cursor-default">Playground<sup class="text-sm">(Soon)</sup></a></li>
      <li class="border-r border-grid-lines"><a href="#contact" class="block p-8 w-full h-full text-center text-2xl hover:bg-primary transition transition-duration-300 ease-in-out">Contact</a></li>
      <li class="p-8 text-center"><ThemeToggle /></li>
    </ul>
  </div>
</nav>

<style lang="scss">
  nav {
    background-color: var(--background-color); 

    .branding {
      max-width: 120px;
    }

    ul {
      color: var(--primary-color);
      font-family: 'PPMondwest', 'sans-serif';

      a:hover {
        color: var(--text-color_inverted);
      }
    }
  }
</style>