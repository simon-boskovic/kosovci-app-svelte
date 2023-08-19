<script>
  import { register } from "swiper/element/bundle";
  // register Swiper custom elements
  register();
  export let images = [];
</script>

<div class="c-swiper-wrapper" />
<swiper-container navigation="true" pagination="true" scrollbar="true">
  {#each images as imageObj}
    <swiper-slide lazy="true">
      <div class="c-image-wrapper">
        <img src={imageObj.image} alt="dd" loading="lazy" />
      </div>
    </swiper-slide>
  {/each}
</swiper-container>

<style>
  .c-image-wrapper {
    position: relative;
    aspect-ratio: 70/45;
    margin-bottom: 2rem;
    background-size: cover;
    background: white;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .c-swiper-wrapper {
    opacity: 0;
    animation-name: fade-left;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .c-image-wrapper img {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    color: transparent;
  }

  @keyframes fade-left {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
