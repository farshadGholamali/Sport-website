<script lang="ts">
  // Components
  import Button from "../../@core/components/Button.svelte";
  // Interfaces
  import type IButton from "../../@core/interface/IButton";
  // Props
  let BtnDeposit: IButton = {
    tagType: "a",
    hypertext: "/",
    classes:
      "btn min-h-min h-10 bg-red-500 hover:bg-red-400 border-transparent hover:border-transparent rounded-[20px] shadow-lg shadow-red-500/50",
    text: "Make a deposit",
  };
  let BtnSearch: IButton = {
    tagType: "button",
    classes:
      "btn min-h-min h-10 px-2.5 hover:border-transparent border-blue-400 bg-blue-100 hover:bg-blue-200",
  };
</script>

<div class="navbar justify-between bg-base-100 ">
  <div class="flex-1 navbar-start">
    <a href="/" class="btn btn-ghost min-h-min h-10 normal-case text-xl"
      >Football
    </a>
  </div>

  <div class="tabs navbar-center">
    <a href="/" class="tab tab-bordered">Sport</a>
    <a href="/" class="tab tab-bordered tab-active">Live</a>
    <a href="/" class="tab tab-bordered">Casino</a>
    <a href="/" class="tab tab-bordered">E-sport</a>
    <a href="/" class="tab tab-bordered">Promos</a>
    <a href="/" class="tab tab-bordered">Support</a>
  </div>

  <div class="flex navbar-end gap-4">
    <Button
      hypertext={BtnDeposit.hypertext}
      tagType={BtnDeposit.tagType}
      classes={BtnDeposit.classes}
      text={BtnDeposit.text}
    />
    <Button tagType={BtnSearch.tagType} classes={BtnSearch.classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 stroke-cyan-800"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </Button>

    <div class="dropdown dropdown-end">
      <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            src="https://api.lorem.space/image/face?hash=33791"
            alt="Profile"
          />
        </div>
      </label>

      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="/" class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
    
  </div>
</div>

<style>
</style>
