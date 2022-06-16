<script lang="ts">
  import Header from "./components/combined-layout/Header.svelte";
  import QuickView from "./components/combined-layout/QuickView.svelte";
  import Main from "./components/combined-layout/Main.svelte";
</script>

<main>
  <Header />
  <div class="flex">
    <QuickView />
    <Main />
  </div>
</main>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
