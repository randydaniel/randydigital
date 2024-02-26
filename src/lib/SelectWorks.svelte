<script>
	let selectWorks = [
		{
			title: 'Boring Design Club',
			service: 'Web Development',
      program: 'Framer'
		},
    {
			title: 'ML UI Design System',
			service: 'Design System',
      program: 'Figma'
		},
    {
			title: 'Keurig/Dr. Pepper',
			service: 'Web Development',
      program: 'Salesforce'
		},
    {
			title: 'Radar Relay',
			service: 'Web Development',
      program: 'Multi'
		},
    {
			title: 'Activated.Bio',
			service: 'UX/UI',
      program: 'Figma'
		}
	];
</script>

<section id="select-works" class="border-b border-grid-lines">
  <div class="container">
    <div class="grid">
      {#each selectWorks as work}
      <div class="work p-8 border-x border-b border-grid-lines">
        <div class="flex mb-6">
          <span class="sw-service text-xs uppercase border bg-primary border-primary rounded-full px-3 py-1 leading-none mr-1">{work.service}</span>
          <span class="sw-program text-xs uppercase border border-primary border-dashed rounded-full px-3 py-1 leading-none">{work.program}</span>
        </div>
        <h2 class="text-8xl font-bold uppercase">{work.title}</h2>
      </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  #select-works {
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