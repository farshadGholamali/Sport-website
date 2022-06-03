<script lang="ts">
  // Interface
  import type ITabsItems from "../interface/ITabsItems";
  // Props
  export let TabsItems: ITabsItems[];
</script>

<div class="tabs navbar-center">
  {#each TabsItems as TabItem}
    <a href={TabItem.hypertext} class={TabItem.classes}>{TabItem.title}</a>
  {/each}
</div>

<style></style>
