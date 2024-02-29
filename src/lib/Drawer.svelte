<script>
  import { createEventDispatcher } from 'svelte';

  export let workItem = null;

  const dispatch = createEventDispatcher();

  function closeDrawer() {
    dispatch('close');
  }
</script>

<div class="h-screen border-t border-grid-lines opacity-90 z-10 drawer {workItem ? 'open' : ''}">
  <div class="container h-screen">
    <div class="grid grid-cols-1 relative">
      {#if workItem}
        <!-- Display the work item's details here -->
        <div class="content p-8 border-x border-grid-lines">
          <button class="close-btn" on:click={closeDrawer}>⊗</button>
          <h2 class="text-8xl font-bold uppercase text-center">{workItem.title}</h2>
          <div class="grid grid-rows-1">
            <div class="flex items-top justify-center p-8">
              <img class="h-3/5 w-auto" src={workItem.img} alt={workItem.title} />
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

  &.open {
    transform: translateY(0); /* Slide in */
  }

  .close-btn {
    position: absolute;
    top: 2rem; // Adjust as needed
    right: 2rem; // Adjust as needed
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem; // Adjust as needed
  }
}
</style>