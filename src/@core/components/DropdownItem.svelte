<script>
  export let DropdownItems;
</script>

<ul
  tabindex="0"
  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
>
  {#each DropdownItems as DropdownItem}
    <li>
      <a href={DropdownItem.hypertext} class={DropdownItem.classes}>
        {DropdownItem.title}
        {#if DropdownItem.notification}
          <span class="badge">{DropdownItem.notification}</span>
        {/if}
      </a>
    </li>
  {/each}
</ul>

<style></style>
