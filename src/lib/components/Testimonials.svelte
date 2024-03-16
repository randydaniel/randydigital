<section id="testimonials" class="border-b border-grid-lines">
  <div class="container">
    <div class="grid grid-auto-rows lg:grid-cols-2 border-x border-grid-lines">
      <div class="p-8 border-b lg:border-r border-grid-lines">
        <div class="testimonial-item relative flex flex-col justify-between h-full">
          <blockquote class="font-light tracking-tight mb-16">Randy is a remarkable designer with unparalleled attention to detail. His work at Radar has pushed the envelope of Blockchain/Ethereum UX...</blockquote>
          <div>
            <h3 class="uppercase">Ian Smith</h3>
            <p class="font-light tracking-tight">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-8">
        <div class="testimonial-item relative flex flex-col justify-between h-full">
          <blockquote class="font-light tracking-tight mb-16">I've had the pleasure of working with Randy on numerous projects for the past 15 years, and during this time, he has demonstrated a strong commitment to his craft. He is approachable and forward-thinking in his design & development process.</blockquote>
          <div>
            <h3 class="uppercase">Robert Price</h3>
            <p class="font-light tracking-tight">Legal Supervisor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  blockquote {
    color: var(--text-color);
    position: relative;
  }

  .testimonial-item {
    p {
      color: var(--text-color);
    }

    &:before {
      content: url('../assets/images/blockquote-quote.svg');
      position: absolute;
      top: -0.5rem; left: -0.5rem;
    }
  }
</style>