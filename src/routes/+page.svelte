<script>
  import HeroSection from "../components/sections/HeroSection.svelte";

  export let data;
</script>

<div class="main">
  <div class="main-wrapper">
    <div class="hero-container">
      <HeroSection images={data.images} />
    </div>
  </div>
</div>
