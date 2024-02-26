<script>
  import Services from '$lib/Services.svelte';
  import Clients from '$lib/Clients.svelte';
  import Testimonials from '$lib/Testimonials.svelte';
  import SelectWorks from '$lib/SelectWorks.svelte';

  import TagSmile from '$lib/assets/images/tag-smile.svg';
  import TagSparkle from '$lib/assets/images/tag-sparkle.svg';
  import TagHeart from '$lib/assets/images/tag-heart.svg';
  import TagOutline from '$lib/assets/images/tag-outline.svg';
  import TagFull from '$lib/assets/images/tag-full.svg';
  import TagArrowTopRight from '$lib/assets/images/tag-arrow_tr.svg';
</script>

<section class="border-b border-grid-lines">
  <div class="container">
    <!-- Intro/Skiilset -->
    <div class="grid border-x border-grid-lines px-8 py-24">
      <div class="flex flex-wrap">
        <span class="inline-block font-display text-8xl uppercase px-8 py-3 border-2 border-dashed rounded-full mb-4 mr-4">UI/UX</span>
        <img class="mb-4 mr-4" src={TagSmile} alt="" />
        <span class="inline-block font-display text-8xl uppercase px-8 py-3 border-2 border-dashed rounded-full mb-4 mr-4">Brand Identity</span>
        <img class="mb-4 mr-4" src={TagSparkle} alt="" />
        <span class="inline-block font-display text-8xl uppercase px-8 py-3 border-2 border-dashed rounded-full mb-4 mr-4">Design Systems</span>
        <img class="mb-4 mr-4" src={TagOutline} alt="" />
        <img class="mb-4 mr-4" src={TagFull} alt="" />
        <span class="inline-block font-display text-8xl uppercase px-8 py-3 border-2 border-dashed rounded-full mb-4 mr-4">Product Design</span>
        <img class="mb-4 mr-4" src={TagOutline} alt="" />
        <span class="inline-block font-display text-8xl uppercase px-8 py-3 border-2 border-dashed rounded-full mb-4 mr-4">Web Development</span>
        <img class="mb-4 mr-4" src={TagHeart} alt="" />
      </div>
    </div>
    <!-- Let's Work Together -->
    <div id="lets-work-together" class="grid grid-cols-6 border-x border-t border-grid-lines">
      <div class="col-span-4 border-r border-grid-lines p-8">
        <h2 class="text-2xl mb-4">Introduction</h2>
        <p class="font-light tracking-tight">My name is Randy Daniel. I'm an Interaction Designer based in Baltimore, Maryland, bringing over 15 years of expertise in both design and development. My work focuses on creating meaningful digital experiences that seamlessly integrate user needs with innovative design solutions.</p>
      </div>
      <div class="col-span-2 border-grid-lines">
        <a class="block w-full h-full hover:bg-primary transition transition-duration-300 ease-in-out" href="mailto:hey@randy.digital">
          <div class="flex items-center justify-center w-full h-full">
            <div class="flex">
              <span class="font-display text-2xl uppercase mr-2 px-8 py-3 text-center border-2 border-dashed rounded-full">Let's Work Together</span>
              <img src={TagArrowTopRight} alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<Services />
<Clients />
<Testimonials />
<SelectWorks />

<style lang="scss">
  #lets-work-together {
    p {
      color: var(--text-color);
    }

    a:hover {
      color: var(--text-color_inverted);
    }
  }
</style>