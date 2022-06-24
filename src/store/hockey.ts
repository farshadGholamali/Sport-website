import axios from "axios";
import { readable } from "svelte/store";
// Games
// For all requests to games you can add the query parameter timezone to your request in order to retrieve the list of games in the time zone of your choice like “Europe/London“
// To know the list of available time zones you have to use the endpoint timezone
export const Hockey_getGames = readable(async (id?:number,date?:string,league?: number, season?: number,team?:number,timezone?:string) => {
    try {
        const response = await axios.get("https://v1.hockey.api-sports.io/games", {
            params: {
                ...(id && { id: id }),
                ...(date && { date: date }),
                ...(league && { league: league }),
                ...(season && { season: season }),
                ...(team && { team: team }),
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



// Standings
// Get the standings for a league.
// Return a table of one or more rankings according to the league / cup. Some competitions have several rankings in a year, regular season, pre season etc…
// To know the list of available stages or groups you have to use the endpoint standings/stages or standings/groups
export const  Hockey_getStandings = readable(async (league: number, season: number, team?: number, stage?: string, group?: string) => {
    try {
        const response = await axios.get("https://v1.hockey.api-sports.io/standings", {
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

// Leagues
// Get the list of available leagues and cups.
// The league id are unique in the API and leagues keep it across all seasons
export const Hockey_getAllLeagues = readable(async (id?: number, name?: string, country_id?: number, country?: string, type?: string, season?: number, search?: string) => {
    try {
        const response = await axios.get("https://v1.hockey.api-sports.io/leagues", {
            params: {
                ...(id && { id: id }),
                ...(name && { name: name }),
                ...(country_id && { country_id: country_id }),
                ...(country && { country: country }),
                ...(type && { type: type }),
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