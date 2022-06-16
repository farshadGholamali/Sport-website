<script lang="ts">
  import { Football_getAllLeagues } from "../../store/football";
  import { Basketball_getAllLeagues } from "../../store/basketball";
  import { Volleyball_getAllLeagues } from "../../store/volleyball";
  import { Baseball_getAllLeagues } from "../../store/baseball";

  import { onMount } from "svelte";
  let allLeagues = [];
  let sortCountryLeague = [];

  // Grouping objects by a property
  function groupBy(objectArray, property, prop) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property][prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  onMount(async () => {
    // allLeagues = await $Football_getAllLeagues();
    // allLeagues = await $Volleyball_getAllLeagues();
    // allLeagues = await $Basketball_getAllLeagues();
    // allLeagues = await $Baseball_getAllLeagues();

    sortCountryLeague = groupBy(allLeagues, "country", "name");
    console.log(sortCountryLeague);
    console.log(allLeagues);
  });

  let Favorites = [
    {
      title: "Champions League",
      icon: "src/@core/assets/photos/teams/Champions_League.png",
      hypertext: "/",
    },
    {
      title: "LALiga",
      icon: "src/@core/assets/photos/teams/LALiga.png",
      hypertext: "/",
    },
    {
      title: "Premier League",
      icon: "src/@core/assets/photos/teams/Premier_League.png",
      hypertext: "/",
    },
    {
      title: "Bundesliga",
      icon: "src/@core/assets/photos/teams/Bundesliga.png",
      hypertext: "/",
    },
    {
      title: "Serie A",
      icon: "src/@core/assets/photos/teams/Serie_A.png",
      hypertext: "/",
    },
    {
      title: "FC Barcelona",
      icon: "src/@core/assets/photos/teams/FC_Barcelona.png",
      hypertext: "/",
    },
    {
      title: "Chelsea FC",
      icon: "src/@core/assets/photos/teams/Chelsea_FC.png",
      hypertext: "/",
    },
  ];

  let onStar: boolean = false;
</script>

<!-- teams -->
<div>
  <div class="ml-5">
    <h1 class="py-3 mx-4 prose-h1">FAVORITES</h1>
    <ul class="menu bg-base-100 w-56 rounded-box">
      {#each Favorites as Favorite}
        <li class="flex">
          <div class="justify-between">
            <a href={Favorite.hypertext}>
              <div class="flex items-center">
                <div class="avatar mr-2">
                  <div class="w-8">
                    <img src={Favorite.icon} alt="" />
                  </div>
                </div>
                {Favorite.title}
              </div>
            </a>
            <svg
              on:click={() => (onStar = !onStar)}
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 "
              fill={onStar ? "none" : "gold"}
              viewBox="0 0 24 24"
              stroke="black"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  <!-- country -->
  <div class="ml-5">
    <h1 class="py-3 mx-4 prose-h1">COUNTRY</h1>
    <div class="w-56">
      {#if sortCountryLeague}
        {#each Object.keys(sortCountryLeague) as country}
          <li class="flex">
            <div class="justify-between w-full">
              <div
                tabindex="0"
                class="collapse collapse-arrow  bg-base-100 rounded-box"
              >
                <div class="collapse-title flex items-center">
                  <div class="avatar mr-2">
                    <div class="w-8 rounded-full">
                      <img
                        src={sortCountryLeague[country][0].country.flag ||
                          "src/@core/assets/photos/countries/World-Flags-Globe.png"}
                        alt=""
                      />
                    </div>
                  </div>
                  {country}
                </div>
                <div class="collapse-content  overflow-auto">
                  {#each sortCountryLeague[country] as league}
                    <!-- Football -->
                    <!-- <p class="py-2.5">{league.league.name}</p> -->
                    <!-- Volleyball -->
                    <!-- Basketball -->
                    <!-- Baseball -->
                    <!-- <p class="py-2.5">{league.name}</p> -->
                  {/each}
                </div>
              </div>
            </div>
          </li>
        {/each}
      {/if}
    </div>
  </div>
</div>


<style>
  .collapse:focus  .collapse-content{
    max-height: 200px;
  }
</style>
