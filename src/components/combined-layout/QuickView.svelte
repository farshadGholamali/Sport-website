<script lang="ts">
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
  let country = [
    {
      title: "Australia",
      icon: "src/@core/assets/photos/countries/australia.png",
      hypertext: "/",
    },
    {
      title: "Austria",
      icon: "src/@core/assets/photos/countries/austria.png",
      hypertext: "/",
    },
    {
      title: "Belarus",
      icon: "src/@core/assets/photos/countries/belarus.png",
      hypertext: "/",
    },
    {
      title: "Belgium",
      icon: "src/@core/assets/photos/countries/belgium.png",
      hypertext: "/",
    },
    {
      title: "Bolivia",
      icon: "src/@core/assets/photos/countries/bolivia.png",
      hypertext: "/",
    },
    {
      title: "Brazil",
      icon: "src/@core/assets/photos/countries/brazil.png",
      hypertext: "/",
    },
    {
      title: "Canada",
      icon: "src/@core/assets/photos/countries/canada.png",
      hypertext: "/",
    },
    {
      title: "Colombia",
      icon: "src/@core/assets/photos/countries/colombia.png",
      hypertext: "/",
    },
    {
      title: "Chile",
      icon: "src/@core/assets/photos/countries/chile.png",
      hypertext: "/",
    },
    {
      title: "Croatia",
      icon: "src/@core/assets/photos/countries/croatia.png",
      hypertext: "/",
    },
  ];
  let onStar: boolean = false;
</script>

<!-- teams -->
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
    {#each country as Favorite}
      <li class="flex">
        <div class="justify-between">
          <div
            tabindex="0"
            class="collapse collapse-arrow  bg-base-100 rounded-box"
          >
            <div class="collapse-title flex items-center">
              <div class="avatar mr-2">
                <div class="w-8">
                  <img src={Favorite.icon} alt="" />
                </div>
              </div>
              {Favorite.title}
            </div>
            <div class="collapse-content">
              <p>
                tabindex="0" attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </div>
</div>

<style></style>
