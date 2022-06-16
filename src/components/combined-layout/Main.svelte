<script>
  import Tv from "../common/Tv.svelte";
</script>

<div class="w-2/3">
  <Tv />
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <span>Today</span>
      <select class="select select-ghost w-full max-w-xs focus:outline-none">
        <option disabled>select league</option>
        <option selected>Premier League</option>
        <option>Serie_A</option>
        <option>LaLiga</option>
      </select>
    </div>

    <div class="flex   gap-x-4">
      <div class="">
        <input type="radio" id="24h" value="24h" name="radio" />
        <label for="24h">24h</label>
      </div>
      <div>
        <input type="radio" id="Tomorrow" value="tomorrow" name="radio" />
        <label for="Tomorrow">Tomorrow</label>
      </div>
      <div>
        <input type="radio" id="All" value="all" name="radio" />
        <label for="All">All</label>
      </div>
    </div>
  </div>

  <table class="table-auto table-zebra gap-0.5 w-full rounded-lg">
    <thead>
      <tr class="text-justify bg-gray-300">
        <th>Time</th>
        <th />
        <th class="text-center">Home</th>
        <th class="text-center">Draft</th>
        <th class="text-center">Away</th>
        <th />
        <th>Odds</th>
        <th>Stats</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>15.00</td>
        <td class="text-right">Chelsea <span>Logo</span></td>
        <td class="text-center"><span class="point">2.95</span></td>
        <td class="text-center"><span class="point">3.35</span> </td>
        <td class="text-center"><span class="point">2.40</span></td>
        <td><span>logo</span> Manchester United</td>
        <td><span class="odds">+ 163</span></td>
        <td>
          <span class="stats">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#b3c0ff"
              >
                <path
                  d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                />
              </svg>
           
          </span></td
        >
      </tr>
      <tr>
        <td>15.00</td>
        <td class="text-right">Chelsea <span>Logo</span></td>
        <td class="text-center">2.95</td>
        <td class="text-center">3.35</td>
        <td class="text-center">2.40</td>
        <td><span>logo</span> Manchester United</td>
        <td>+ 163</td>
        <td>
          <span class="stats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#9b9bff"
            >
              <path
                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
              />
            </svg>
          </span>
        </td>
      </tr>
      <tr>
        <td>15.00</td>
        <td class="text-right">Chelsea <span>Logo</span></td>
        <td class="text-center">2.95</td>
        <td class="text-center">3.35</td>
        <td class="text-center">2.40</td>
        <td><span>logo</span> Manchester United</td>
        <td>+ 163</td>
        <td>icon</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  table th:nth-child(1) {
    border-radius: 5px 0px 0px 0px;
  }

  table th:nth-last-child(1) {
    border-radius: 0px 5px 0px 0px;
  }
  td,
  th {
    padding: 10px;
  }
  .point {
    border: 1px solid;
    padding: 4px 7px;
    border-radius: 3px;
  }

  .odds {
    border: 1px solid;
    padding: 4px 7px;
    border-radius: 3px;
  }
  .stats {
    border: 1px solid;
    padding: 4px 7px;
    border-radius: 3px;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
    background-color: #eff6ff;
    color: #1e3a8a;
    border: 1px #dbeaff solid;
    padding: 1px 10px;
    border-radius: 0.375rem;
  }
  input:checked ~ label {
    background-color: #c5deff;
  }
</style>
