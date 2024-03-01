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

<div class="h-screen border-t border-grid-lines z-10 drawer opacity-90 {workItem ? 'open' : ''}">
  <div class="container">
    <div class="grid grid-cols-1">
      {#if workItem}
        <!-- Display the work item's details here -->
        <div class="content max-h-screen p-8 border-x border-grid-lines">
          <button class="close-btn" on:click={closeDrawer}>⊗</button>
          <div class="sticky top-0">
            <h2 class="text-8xl font-bold uppercase text-center">{workItem.title}</h2>
          </div>
          <div class="grid grid-rows-1 max-h-full">
            <div class="flex items-top justify-center p-8">
              <img class="max-h-100 w-auto" src={workItem.img} alt={workItem.title} />
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
.drawer {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: 100vh;
  transform: translateY(100%); /* Start hidden */
  transition: transform 0.3s ease-in-out;
  background: var(--background-color); /* Add a background to make the content visible */
  overflow-y: hidden; /* Prevent scrolling on the drawer itself */

  &.open {
    transform: translateY(0); /* Slide in */
  }

  .content {
    max-height: 100vh; /* Adjust based on your needs */
    overflow-y: auto; /* Enable vertical scrolling */
    padding: 2rem;
    box-sizing: border-box; /* Ensures padding is included in the height calculation */
  }

  .close-btn {
    position: absolute;
    top: 2rem; // Adjust as needed
    right: 2rem; // Adjust as needed
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem; // Adjust as needed
    font-weight: lighter;
  }
}
</style>