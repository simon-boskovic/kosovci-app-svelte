<script lang="ts">
  import "../../styles/global.scss";

  let isMenuOpen = false;
  let isScrolled = false;

  let onScroll = () => {
    isScrolled = window.scrollY > 0;
  };
</script>

<svelte:window on:scroll={onScroll} />

<nav class="c-navbar-wrapper {isScrolled && 'c-navbar-wrapper--scrolled'}">
  <div class="c-navbar">
    <div class="c-logo">LOGO KOSOVCI</div>
    <button
      class="c-menu-toggle-wrap {isMenuOpen && 'c-menu-toggle-wrap--is-open'}"
      on:click={() => (isMenuOpen = !isMenuOpen)}
    >
      <div class="c-menu-toggle-line" />
      <div class="c-menu-toggle-line" />
      <div class="c-menu-toggle-line" />
    </button>
    <ul class="c-menu {isMenuOpen && 'c-menu--open'}">
      <li class="c-menu-link"><a href="/">Kapela</a></li>
      <li class="c-menu-link"><a href="/">Kde hrajeme</a></li>

      <li class="c-menu-link"><a href="/">Kontakt</a></li>
    </ul>
  </div>
  <div class="c-mobile-menu {isMenuOpen && 'c-mobile-menu--open'}">
    <ul>
      <li class="c-mobile-menu-link"><a href="/">Kapela</a></li>
      <li class="c-mobile-menu-link"><a href="/">Kde hrajeme</a></li>

      <li class="c-mobile-menu-link"><a href="/">Kontakt</a></li>
    </ul>
  </div>
</nav>

<style lag>
  /* Navbar.module.scss */
  .c-navbar-wrapper {
    width: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transform: scaleY(1);
    z-index: 2;
    transform-origin: top;
    transition: transform 0.5s, 0.5s;
    animation: slideDown 0.5s ease forwards; /* Animace při načítání stránky */

    @media (max-width: 1025px) {
      background-color: rgba(#1b1b36, 0.8) !important;
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .c-navbar-wrapper--scrolled {
    background-color: rgba(27, 27, 54, 0.65);
  }

  .c-navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 20px;
    max-width: 80rem;
    margin: auto;
  }

  .c-logo {
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2a70c;
    border-radius: 50px;
    margin-right: 20px;

    @media (max-width: 1025px) {
      margin-right: 0;
    }
  }

  .c-menu-toggle-wrap {
    display: none;
    background: none;
    border: none;

    @media (max-width: 1025px) {
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
  }

  .c-menu-toggle-line {
    width: 34px;
    height: 2px;
    background-color: white;
    margin-bottom: 4px;
    transition: transform 0.3s ease;
  }

  .c-menu-toggle-wrap.c-menu-toggle-wrap--is-open
    .c-menu-toggle-line:first-child {
    transform: translateY(6px) rotate(45deg);
  }

  .c-menu-toggle-wrap.c-menu-toggle-wrap--is-open
    .c-menu-toggle-line:nth-child(2) {
    opacity: 0;
  }

  .c-menu-toggle-wrap.c-menu-toggle-wrap--is-open
    .c-menu-toggle-line:last-child {
    transform: translateY(-6px) rotate(-45deg);
  }

  .c-menu {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 500px; /* Přizpůsobte hodnotu dle potřeby */
    overflow: hidden;
    transition: max-height 0.3s ease;

    @media (max-width: 1025px) {
      display: flex; /* Upraveno na "flex" */
      max-height: none; /* Upraveno na "none" */
      display: none;
    }
  }

  .c-menu--open {
    max-height: 500px; /* Zadejte vhodnou hodnotu */
  }

  .c-menu li:not(:last-child) {
    margin-right: 2rem;
  }

  .c-menu-link {
    color: white;
    text-decoration: none;
    position: relative;
  }

  .c-menu-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: rgb(100, 100, 197);
    transition: width 300ms;
  }

  .c-menu-link:hover::after,
  .c-menu-link:focus::after,
  .c-menu-link:active::after,
  .c-menu-link.c-menu-link--active::after {
    width: 100%;
  }

  .c-mobile-menu ul {
    width: 100%;
    text-align: center;
  }

  .c-mobile-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
    opacity: 0;
    max-height: 0;
    transition: opacity 0.3s ease, max-height 0.3s ease;
    margin-top: 10px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .c-mobile-menu li {
    margin-top: 1rem;
    border-bottom: 1px solid white; /* Přidání borderu pod každým prvkem */
    padding-bottom: 8px; /* Přidání mezery pod každým prvkem */
  }

  .c-mobile-menu .c-mobile-menu-link {
    text-decoration: none;
    color: white;
    margin-top: 1rem;
  }

  .c-mobile-menu--open {
    display: flex;
    opacity: 1;
    max-height: 500px;
    @media (min-width: 1025px) {
      display: none;
    }
  }

  .c-mobile-menu-link {
    color: white;
    text-decoration: none;
    position: relative;
  }

  .c-mobile-menu-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: rgb(100, 100, 197);
    transition: width 300ms;
  }

  .c-mobile-menu-link:hover::after,
  .c-mobile-menu-link:focus::after,
  .c-mobile-menu-link:active::after,
  .c-mobile-menu-link.c-menu-link--active::after {
    width: 100%;
  }
</style>
