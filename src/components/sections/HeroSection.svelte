<script>
  import ImageSwiper from "../UI/ImageSwiper.svelte";
  export let images = [];
</script>

<div class="hero-section">
  <div class="hero-section__heading">
    <h1>Kosovci - Zábavová skupina s dlouholetou historií</h1>
    <a class="hero-section__cta" href="#nejblizsi-akce">Nejbližší akce</a>
  </div>
  <div class="hero-section__images">
    <ImageSwiper {images} />
  </div>
</div>

<style lang="scss">
  @keyframes fade-right {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .hero-section__cta {
    animation-name: fade-right;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
    margin-top: 2rem;
    margin-bottom: 3rem;
    display: inline-block;
    color: white;
    text-transform: uppercase;
    border-radius: 25px;
    font-weight: 600;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background: rgb(249, 38, 174);
    background: -moz-linear-gradient(
      90deg,
      rgba(249, 38, 174, 1) 0%,
      rgba(128, 40, 238, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(249, 38, 174, 1) 0%,
      rgba(128, 40, 238, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(249, 38, 174, 1) 0%,
      rgba(128, 40, 238, 1) 100%
    );
    text-decoration: none;
    cursor: pointer;
  }
  .hero-section__heading {
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 1.5rem;
    animation-name: fade-right;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .hero-section__images {
    grid-column-start: 3;
    grid-column-end: 6;
  }
  .hero-section {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 2.5rem;
    gap: 2.5rem;
    @media (max-width: 1025px) {
      gap: 0;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, auto);
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
