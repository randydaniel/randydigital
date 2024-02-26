<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

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

  onMount(() => {
    selectWorks.forEach((work, index) => {
      const workEl = document.querySelector(`#work-${index}`);
      const imgEl = workEl.querySelector('.work-img');

      // Adjust image size based on its natural dimensions
      imgEl.addEventListener('load', () => {
        imgEl.style.width = `${imgEl.naturalWidth}px`;
        imgEl.style.height = `${imgEl.naturalHeight}px`;
      });

      workEl.addEventListener('mouseenter', () => {
        gsap.to(imgEl, { autoAlpha: 1, duration: 0.3 });
      });

      workEl.addEventListener('mousemove', (e) => {
        const rect = workEl.getBoundingClientRect();
        const xPos = e.clientX - rect.left - imgEl.offsetWidth / 2;
        const yPos = e.clientY - rect.top - imgEl.offsetHeight / 2;

        gsap.to(imgEl, { x: xPos, y: yPos, duration: 0.3 });
      });

      workEl.addEventListener('mouseleave', () => {
        gsap.to(imgEl, { autoAlpha: 0, duration: 0.3 });
      });
    });
  });
</script>

<section id="select-works" class="border-b border-grid-lines">
  <div class="container">
    <div class="grid">
      {#each selectWorks as work, index}
      <div class="work p-8 border-x border-b border-grid-lines hover:cursor-pointer" id="work-{index}">
        <img src="{work.img}" alt="{work.title}" class="work-img" />
        <div class="work-content">
          <div class="flex mb-6">
            <span class="sw-service text-xs uppercase border bg-primary border-primary rounded-full px-3 py-1 leading-none mr-1">{work.service}</span>
            <span class="sw-program text-xs uppercase border border-primary border-dashed rounded-full px-3 py-1 leading-none">{work.program}</span>
          </div>
          <h2 class="text-8xl font-bold uppercase">{work.title}</h2>
        </div>
      </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  #select-works {
    .work {
      position: relative;
      // Ensure there's enough space for the image to be interacted with
    }

    .work-img {
      border: 2px solid var(--primary-color);
      border-radius: 44px;
      position: absolute;
      max-width: calc(100vw);
      max-height: calc(100vh);
      object-fit: contain; /* This will ensure the aspect ratio is maintained */
      opacity: 0; /* Initially hidden */
      pointer-events: none; /* Image does not interfere with mouse events */
      z-index: 1; /* Behind the text */
    }

    .work-content {
      position: relative;
      z-index: 5; // Ensures text appears above the image
      // Additional styling as needed
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