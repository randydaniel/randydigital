<script>
  import { onMount } from 'svelte';

  import BrandingImg from '$lib/assets/images/rd.svg';
  import RandyDigital from '$lib/assets/images/randydigital.svg';

  // Function to get the day of the week
	function getDayOfWeek() {
		const now = new Date();
		const options = { weekday: 'long' };
		return now.toLocaleDateString('en-US', options);
	}

	// Function to get the time with AM/PM
	function getTimeWithAmPm() {
		const now = new Date();
		let hours = now.getHours() % 12 || 12; // Convert 24-hour time to 12-hour time, making sure it shows '12' instead of '0'
		let minutes = now.getMinutes();
		const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

		// Add leading zero to hours and minutes if necessary
		hours = hours < 10 ? `0${hours}` : hours;
		minutes = minutes < 10 ? `0${minutes}` : minutes;

		return `${hours}:${minutes} ${amPm}`;
	}

	let dayOfWeek = getDayOfWeek();
	let currentTime = getTimeWithAmPm();

	onMount(() => {
		const interval = setInterval(() => {
			dayOfWeek = getDayOfWeek();
			currentTime = getTimeWithAmPm();
		}, 1000);

		return () => {
			clearInterval(interval); // Clean up the interval on component destroy
		};
	});
</script>

<footer id="contact" class="border-b border-grid-lines">
  <div class="container">
    <div class="grid grid-auto-rows lg:grid-cols-6 border-x border-b border-grid-lines">
      <!-- Branding -->
      <div class="col-span-full lg:col-span-3 p-8 border-b lg:border-r border-grid-lines">
        <div class="flex items-center justify-start h-full w-full">
          <img class="branding m-auto lg:m-0" src={BrandingImg} alt="Randy Digital" /><span class="hidden lg:inline font-display uppercase ml-4">&copy; All Rights Reserved 2024 — {dayOfWeek}, {currentTime}</span>
        </div>
      </div>
      <!-- Social Platforms -->
      <div class="col-span-full lg:col-span-3">
        <ul id="social-platforms" class="grid grid-rows-auto lg:grid-cols-3">
          <li class="border-b lg:border-r border-grid-lines"><a href="https://github.com/randydaniel" rel="noreferrer" target="_blank" class="block p-8 w-full h-full text-center text-2xl underline hover:no-underline hover:bg-primary transition transition-duration-300 ease-in-out">GitHub<sup class="text-md ml-2">↗</sup></a></li>
          <li class="border-b lg:border-r border-grid-lines"><a href="https://www.linkedin.com/in/randymdaniel/" rel="noreferrer" target="_blank" class="block p-8 w-full h-full text-center text-2xl underline hover:no-underline hover:bg-primary transition transition-duration-300 ease-in-out">Linkedin<sup class="text-md ml-2">↗</sup></a></li>
          <li class="border-grid-lines"><a href="https://twitter.com/randy__digital" rel="noreferrer" target="_blank" class="block p-8 w-full h-full text-center text-2xl underline hover:no-underline hover:bg-primary transition transition-duration-300 ease-in-out">Twitter(X)<sup class="text-md ml-2">↗</sup></a></li>
        </ul>
      </div>
    </div>
    <div class="grid border-x border-grid-lines">
      <div class="p-8">
        <img src={RandyDigital} alt="Randy Digital" />
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .branding {
    max-width: 120px;
  }

  #social-platforms {
    font-family: 'PPMondwest', 'sans-serif';

    a:hover {
      color: var(--text-color_inverted);
    }
  }
</style>