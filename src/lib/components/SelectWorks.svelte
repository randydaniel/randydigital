<script>
  import SelectWorks from '$lib/data/select-works.json';
  import Drawer from '$lib/components/Drawer.svelte';
  
  let openItemId = null; // Tracks which item's drawer is open

  function toggleDrawer(itemId) {
    if (openItemId === itemId) {
        openItemId = null; // Close the drawer if the same item is clicked again
    } else {
        openItemId = itemId; // Open the drawer for the clicked item
    }
  }
</script>

<section id="select-works" class="border-b border-grid-lines">
  <div class="container">
    <div class="grid">
      {#each SelectWorks as work, index}
      <div class="work relative p-8 border-x border-b border-grid-lines last-of-type:border-b-0">
        <div class="flex mb-6">
          <span class="sw-service text-xs uppercase border bg-primary border-primary rounded-full px-3 py-1 leading-none mr-1">{work.service}</span>
          <span class="sw-program text-xs uppercase border border-primary border-dashed rounded-full px-3 py-1 leading-none">{work.program}</span>
        </div>
        <h2 class="text-8xl font-bold uppercase">
          <a href="javascript:void(0)" 
            class="hover:underline transition transition-duration-300 ease-in-out"
            role="button" 
            aria-expanded="{openItemId === index ? 'true' : 'false'}" 
            on:click={() => toggleDrawer(index)}>
            {work.title}
          </a>
        </h2>
      </div>
      {/each}
    </div>
    <!-- Drawer component is outside the loop -->
    <Drawer workItem={SelectWorks[openItemId]} on:close={() => openItemId = null} />
  </div>
</section>

<style lang="scss">
  #select-works {

    .sw-service {
      color: var(--text-color_inverted);

      &:before {
        content: '✨';
        font-family: 'PPMondwest', 'sans-serif';
        position: relative;
        left: -4px;
      }
    }

    .sw-program {

      &:before {
        content: '@';
        font-family: 'PPMondwest', 'sans-serif';
        position: relative;
        left: -4px;
      }
    }
  }
</style>