<script>
  import { onDestroy, createEventDispatcher } from 'svelte';

  export let workItem = null;
  const dispatch = createEventDispatcher();

  // Function to toggle the no-scroll class
  function toggleBodyScroll(disable) {
    if (!import.meta.env.SSR) { // Ensure this runs only in the browser
      const action = disable ? 'add' : 'remove';
      document.body.classList[action]('no-scroll');
    }
  }

  // Reactive statement for workItem
  $: {
    toggleBodyScroll(!!workItem);
  }

  function closeDrawer() {
    dispatch('close');
  }

  // Cleanup to ensure no-scroll is removed when the component is destroyed
  onDestroy(() => {
    toggleBodyScroll(false);
  });
</script>

<div class="drawer h-screen border-t border-grid-lines z-10 fixed left-0 right-0 bottom-0 translate-y-full transition-transform duration-300 overflow-y-hidden {workItem ? 'open' : ''}">
  <div class="container">
    <div class="grid grid-cols-1">
      {#if workItem}
        <!-- Display the work item's details here -->
        <div class="content h-screen border-x border-grid-lines overflow-y-auto box-border">
          <button class="close-btn absolute top-8 right-8 bg-none border-none cursor-pointer text-3xl font-thin z-20" on:click={closeDrawer}>⊗</button>
          <div class="sw-header grid grid-rows-1 sticky top-0 border-b border-grid-lines p-8">
            <div>
              <h2 class="text-2xl lg:text-8xl font-bold uppercase text-center">{workItem.title}</h2>
            </div>
          </div>
          <div class="grid grid-rows-1">
            <div class="grid grid-rows-1 max-h-full">
              <div class="media-grid p-4 lg:p-8">
                {#if workItem.media.video && workItem.media.video !== ''}
                <div class="p-4 lg:p-8 border border-primary border-dashed rounded-2xl">
                  <video autoplay loop class="w-full aspect-auto">
                    <source src={workItem.media.video} type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/if}
                {#if workItem.media.img.length > 0}
                  <div class="grid grid-flow-col flow-cols-max gap-4 lg:gap-8">
                    {#each workItem.media.img as imgSrc}
                    <div class="p-4 lg:p-8 border border-primary border-dashed rounded-2xl">
                      <img src={imgSrc} alt={workItem.title} />
                    </div>
                    {/each}
                  </div>
                  {:else}
                  <div class="p-4 lg:p-8 border border-primary border-dashed rounded-2xl">
                    <img src={workItem.media.img} alt={workItem.title} />
                  </div>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
.drawer {
  background: var(--background-color_dim); /* Add a background to make the content visible */

  &.open {
    transform: translateY(0); /* Slide in */
  }

  .content {
    .media-grid {
      display: grid;
      grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));
      gap: 2rem;
    }

    .sw-header {
      background: var(--background-color_dim);
    }
  }
}
</style>