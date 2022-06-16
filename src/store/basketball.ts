import { readable } from "svelte/store";
import axios from "axios";

// BASKETBALL 
// https://api-sports.io/documentation/basketball/v1

// Timezone
// Get the list of available timezone to be used in the fixtures endpoint.
export const Basketball_getTimezone = readable(async () => {
    try {
        const response = await axios.get("https://v1.basketball.api-sports.io/timezone", {
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// seasons
// All seasons are only 4-digit keys, so for a league whose season is 2018-2019 the season in the API will be 2018.
// All seasons can be used in other endpoints as filters.
export const Basketball_getSeasons = readable(async () => {
    try {
        const response = await axios.get("https://v1.basketball.api-sports.io/seasons", {
            headers: {
                "X-RapidAPI-Key": "3ecc786cf98a929cf086263756f6bb88"
            }
        })
        return response.data.response
    } catch (err) {
        console.log(err);
    }
})

// Countries
// Get the list of available countries.
// The name and code fields can be used in other endpoints as filters.
export const Basketball_getCountries = readable(async (id?: number, name?: string, code?: string, search?: string) => {
    try {
        const response = await axios.get("https://v1.Basketball.api-sports.io/countries", {
            params: {
                ...(id && { id: id }),
                ...(name && { name: name }),
                ...(code && { code: code }),
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

// Leagues 
// Get the list of available leagues and cups.
// The league id are unique in the API and leagues keep it across all seasons
export const Basketball_getAllLeagues = readable(async (id?: number, name?: string, country?: string, code?: string, season?: number, team?: number, current?: string, search?: string, last?: number) => {
    try {
        const response = await axios.get("https://v1.basketball.api-sports.io/leagues", {
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


// Teams
// Get data about teams.
// The team id are unique in the API and teams keep it among all the leagues/cups in which they participate.
export const Basketball_getTeams = readable(async (id?: number, name?: string, country_id?: number, country?: string, league?: number, season?: number, search?: string) => {
    try {
        const response = await axios.get("https://v1.Basketball.api-sports.io/teams", {
            params: {
                ...(id && { id: id }),
                ...(name && { name: name }),
                ...(country_id && { country_id: country_id }),
                ...(country && { country: country }),
                ...(league && { league: league }),
                ...(season && { season: season }),
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


// teams/statistics
export const Basketball_getTeamsStatistics = readable(async (league: number, season: number, team: number, date?: string) => {
    try {
        const response = await axios.get("https://v1.Basketball.api-sports.io/teams/statistics", {
            params: {
                league,
                season,
                team,
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


// Standings
// Get the standings for a league.
// Return a table of one or more rankings according to the league / cup. Some competitions have several rankings in a year, regular season, pre season etc…
// To know the list of available stages or groups you have to use the endpoint standings/stages or standings/groups
export const Basketball_getStandings = readable(async (league: number, season: number, team: number, stage?: string, group?: string) => {
    try {
        const response = await axios.get("https://v1.Basketball.api-sports.io/standings", {
            params: {
                league,
                season,
                team,
                ...(stage && { stage: stage }),
                ...(group && { group: group }),
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

// standings/stages
// Get the list of available stages for a league to be used in the standings endpoint.
export const Basketball_getStandingsStage = readable(async (league: number, season: number) => {
    try {
        const response = await axios.get("https://v1.Basketball.api-sports.io/standings/stages", {
            params: {
                league,
                season,
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

// standings/groups
// Get the list of available groups for a league to be used in the standings endpoint.
export const Basketball_getStandingsgroups = readable(async (league: number, season: number) => {
    try {
        const response = await axios.get("https://v1.Basketball.api-sports.io/standings/groups", {
            params: {
                league,
                season,
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