<script>
  import DesignSystem from '$lib/assets/images/service-design-system.svg';
  import UI from '$lib/assets/images/service-ui-design.svg';
  import HCI from '$lib/assets/images/service-hci.svg';
  import WebDev from '$lib/assets/images/service-web-dev.svg';
</script>

<section id="services" class="border-b border-grid-lines">
  <div class="container">
    <div class="grid grid-cols-3 border-x border-grid-lines">
      <div class="p-8 border-r border-grid-lines max-h-[713px] overflow-hidden">
        <h2 class="text-2xl mb-4">Design System Development</h2>
        <p class="font-light tracking-tight">Crafting cohesive, scalable design solutions that ensure brand consistency and enhance user experience across digital platforms.</p>
        <img class="mt-8" src={DesignSystem} alt="Design System Development" />
      </div>
      <div class="grid grid-rows-2 border-r border-grid-lines max-h-[713px]">
        <div class="p-8 border-b border-grid-lines">
          <h2 class="text-2xl mb-4">User Interface Design</h2>
          <p class="font-light tracking-tight">Intuitive, visually appealing interfaces that improve user experience and drive engagement.</p>
          <img class="mt-8" src={UI} alt="User Interface Design" />
        </div>
        <div class="p-8 overflow-hidden">
          <h2 class="text-2xl mb-4">Human-Computer Interaction</h2>
          <p class="font-light tracking-tight">Focusing on designing seamless, user-centered experiences that bridge the gap between people and digital technology.</p>
          <img class="mt-8" src={HCI} alt="Human-Computer Interaction" />
        </div>
      </div>
      <div class="p-8 max-h-[713px]">
        <h2 class="text-2xl mb-4">Web Development</h2>
        <p class="font-light tracking-tight">Delivering responsive, high-performance websites for compelling user experiences and digital innovation.</p>
        <img class="mt-8" src={WebDev} alt="Web Development" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #services {
    p {
      color: var(--text-color);
    }
  }
</style>