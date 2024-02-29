<script>
  import Drawer from '$lib/Drawer.svelte';
  
	let selectWorks = [
		{
			title: 'Boring Design Club',
			service: 'Web Development',
      program: 'Framer',
      img: '/select-work/bdc.png'
		},
    {
			title: 'ML UI Design System',
			service: 'Design System',
      program: 'Figma',
      img: '/select-work/mlui.png'
		},
    {
			title: 'Keurig/Dr. Pepper',
			service: 'Web Development',
      program: 'Salesforce',
      img: '/select-work/kdp.png'
		},
    {
			title: 'Activated.Bio',
			service: 'UX/UI',
      program: 'Figma',
      img: '/select-work/activated.png'
		},
    {
			title: 'Radar Relay',
			service: 'Web Development',
      program: 'Multi',
      img: '/select-work/radar.png'
		}
	];

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
      {#each selectWorks as work, index}
      <div class="work p-8 border-x border-b border-grid-lines hover:cursor-pointer">
        <div class="flex mb-6">
          <span class="sw-service text-xs uppercase border bg-primary border-primary rounded-full px-3 py-1 leading-none mr-1">{work.service}</span>
          <span class="sw-program text-xs uppercase border border-primary border-dashed rounded-full px-3 py-1 leading-none">{work.program}</span>
        </div>
        <h2 class="text-8xl font-bold uppercase">
          <a href="javascript:void(0)" 
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
    <Drawer workItem={selectWorks[openItemId]} on:close={() => openItemId = null} />
  </div>
</section>

<style lang="scss">
  #select-works {
    .work {
      position: relative;
      // Ensure there's enough space for the image to be interacted with
    }

    .work:last-of-type {
      border-bottom: none;
    }

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