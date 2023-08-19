<script>
  import MainHeader from "../components/UI/MainHeader.svelte";
  import MainFooter from "../components/UI/MainFooter.svelte";
  export const prerender = true;
</script>

<MainHeader />
<slot />
<MainFooter />
