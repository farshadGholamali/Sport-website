<script lang="ts">
  // Interfaces
  import type ITabsItems from "../../@core/interface/ITabsItems";
  import type IButton from "../../@core/interface/IButton";
  import type IDropDownItem from "../../@core/interface/IDropdownItem";

  // Components
  import Tabs from "../../@core/components/Tabs.svelte";
  import Button from "../../@core/components/Button.svelte";
  import DropdownMenu from "../../@core/components/DropdownMenu.svelte";
  import DropdownItem from "../../@core/components/DropdownItem.svelte";

  // Tabs Props
  let TabsItems: ITabsItems[] = [
    {
      title: "Sport",
      classes: "tab tab-bordered",
      hypertext: "/",
    },
    {
      title: "Live",
      classes: "tab tab-bordered tab-active",
      hypertext: "/",
    },
    {
      title: "Casino",
      classes: "tab tab-bordered",
      hypertext: "/",
    },
    {
      title: "E-sport",
      classes: "tab tab-bordered",
      hypertext: "/",
    },
    {
      title: "Promos",
      classes: "tab tab-bordered",
      hypertext: "/",
    },
    {
      title: "Support",
      classes: "tab tab-bordered",
      hypertext: "/",
    },
  ];

  // Button Props
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

  // DropDownMenu Props
  let DropdownItems: IDropDownItem[] = [
    {
      title: "profile",
      notification: "New",
      hypertext: "/",
      classes: "justify-between",
    },
    {
      title: "Setting",
      notification: "",
      hypertext: "/",
      classes: "justify-between",
    },
    {
      title: "Logout",
      notification: "",
      hypertext: "/",
      classes: "justify-between",
    },
  ];
</script>

<div class="navbar justify-between bg-base-100 ">
  <!-- navbar start -->
  <div class="flex-1 navbar-start">
    <a href="/" class="btn btn-ghost min-h-min h-10 normal-case text-xl"
      >Football
    </a>
  </div>

  <!-- navbar center -->
  <Tabs {TabsItems} />

  <!-- navbar end  -->
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
    <DropdownMenu>
      <div class="dropdown dropdown-end">
        <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              src="https://api.lorem.space/image/face?hash=33791"
              alt="Profile"
            />
          </div>
        </label>
        <DropdownItem {DropdownItems} />
      </div>
    </DropdownMenu>
  </div>
</div>

