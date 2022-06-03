<script lang="ts">
  export let classes: string = "";
  export let text: string = "";
  export let tagType: string = "";
  export let hypertext: string = "";
</script>

{#if tagType === "button"}
  <button class={classes}>{text}
  <slot></slot>
</button>
{:else}
  <a href={hypertext} class={classes}>{text}</a>
{/if}

<style>

</style>