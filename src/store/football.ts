import { readable } from 'svelte/store';
import axios from 'axios';

// Countries
// Get the list of available countries for the leagues endpoint.
// The name and code fields can be used in other endpoints as filters.
// https://www.api-football.com/documentation-v3#tag/Countries
export const Football_getAllCountries = readable(async (name?: string, code?: string, search?: string) => {
    try {
        const response = await axios.get(
            "https://v3.football.api-sports.io/countries",
            {
                params: {
                    ...(name && { name: name }),
                    ...(code && { code: code }),
                    ...(search && { search: search }),
                },
                headers: {
                    "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
                }
            }
        );
        return response.data.response;
    } catch (err) {
        console.log(err);
    }
});

// Leagues
// Get the list of available leagues and cups.
export const Football_getAllLeagues = readable(async (id?: number, name?: string, country?: string, code?: string, season?: number, team?: number, current?: string, search?: string, last?: number) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/leagues", {
            params: {
                ...(id && { id: id }),
                ...(name && { name: name }),
                ...(country && { country: country }),
                ...(code && { code: code }),
                ...(season && { season: season }),
                ...(team && { team: team }),
                ...(current && { current: current }),
                ...(search && { search: search }),
                ...(last && { last: last }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})


// Seasons
// Get the list of available seasons.
export const Football_getAllSeason = readable(async () => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/leagues/seasons", {
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Teams information
// Get the list of available teams.
// The team id are unique in the API and teams keep it among all the leagues/cups in which they participate.
export const Football_getAllteams = readable(async (id?: number, name?: string, league?: number, season?: number, country?: string, code?: string, venue?: number, search?: string) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/teams", {
            params: {
                ...(id && { id: id }),
                ...(name && { name: name }),
                ...(league && { league: league }),
                ...(season && { season: season }),
                ...(country && { country: country }),
                ...(code && { code: code }),
                ...(venue && { venue: venue }),
                ...(search && { search: search }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Teams statistics
// Returns the statistics of a team in relation to a given competition and season.
export const Football_getTeamsStatistics = readable(async (league?: number, season?: number, team?: number, date?: string) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/teams/statistics", {
            params: {
                ...(league && { league: league }),
                ...(season && { season: season }),
                ...(team && { team: team }),
                ...(date && { date: date }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Teams seasons
// Get the list of seasons available for a team.
export const Football_getTeamsSeasons = readable(async (team: number) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/teams/seasons", {
            params: {
                team: team
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Teams countries
// Get the list of countries available for the teams endpoint.
export const Football_getTeamsCountries = readable(async () => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/teams/countries", {
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Venues
// Get the list of available venues.
// The venue id are unique in the API.
export const Football_getVenues = readable(async (id: number, name?: string, city?: string, country?: string, search?: string) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/venues", {
            params: {
                id: id,
                ...(name && { name: name }),
                ...(city && { city: city }),
                ...(country && { country: country }),
                ...(search && { search: search })
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Standings
// Get the standings for a league or a team.
// Return a table of one or more rankings according to the league / cup.
// Some competitions have several rankings in a year, group phase, opening ranking, closing ranking etc…
export const Football_getStandings = readable(async (season: number, league?: number, team?: number) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/standings", {
            params: {
                ...(league && { league: league }),
                season: season,
                ...(team && { team: team }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);

    }
})

// Fixtures
// Rounds
// Get the rounds for a league or a cup.
// The round can be used in endpoint fixtures as filters
export const Football_getRounds = readable(async (league: number, season: number, current?: boolean) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/fixtures/rounds", {
            params: {
                league: league,
                season: season,
                ...(current && { current: current }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Fixtures
// For all requests to fixtures you can add the query parameter timezone to your request in order to retrieve the list of matches in the time zone of your choice like “Europe/London“
// To know the list of available time zones you have to use the endpoint timezone.
export const Football_getFixtures = readable(async (id?: number, ids?: string, live?: string, date?: string, league?: number, season?: number, team?: number, last?: number, next?: number, from?: string, to?: string, round?: string, status?: string, venue?: number, timezone?: string) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/fixtures", {
            params: {
                ...(id && { id: id }),
                ...(ids && { ids: ids }),
                ...(live && { live: live }),
                ...(date && { date: date }),
                ...(league && { league: league }),
                ...(season && { season: season }),
                ...(team && { team: team }),
                ...(last && { last: last }),
                ...(next && { next: next }),
                ...(from && { from: from }),
                ...(to && { to: to }),
                ...(round && { round: round }),
                ...(status && { status: status }),
                ...(venue && { venue: venue }),
                ...(timezone && { timezone: timezone }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Head To Head
// Get heads to heads between two teams.
export const Football_getHeadToHead = readable(async (h2h: string, date?: string, league?: boolean, season?: number, last?: number, next?: number, from?: string, to?: string, status?: string, venue?: number, timezone?: string) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/fixtures/headtohead", {
            params: {

                h2h: h2h,
                ...(date && { date: date }),
                ...(league && { league: league }),
                ...(season && { season: season }),
                ...(last && { last: last }),
                ...(next && { next: next }),
                ...(from && { from: from }),
                ...(to && { to: to }),
                ...(status && { status: status }),
                ...(venue && { venue: venue }),
                ...(timezone && { timezone: timezone }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Statistics
// Get the statistics for one fixture.
export const Football_getStatistics = readable(async (fixture: number, team?: number, type?: string) => {
    try {
        const response = await axios.get("https://v3.football.api-sports.io/fixtures/statistics", {
            params: {
                fixture: fixture,
                ...(team && { team: team }),
                ...(type && { type: type }),
            },
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})