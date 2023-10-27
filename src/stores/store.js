import { defineStore } from 'pinia'
import { Api } from '../composables/services.js'

export const useStore = defineStore('store', {
  state: () => {
    return {
      characters: ['toto'], // list of all characters
      errorFetchingCharacters: false, // manage errors
      character: null, // information on one character
    }
  },
  actions: {
    async getCharacters () {
      let page = 1 // start on the first page

      try {
        // we dont know how many pages the api has
        // so while true we loop
        while (true) {
          this.errorFetchingCharacters = false
          // fetching API pages
          const resp = await Api(`https://swapi.dev/api/people/?page=${page}`)
          this.characters.push(...resp.results)
          page++

          // when the last character has the key "next" to null we break the loop
          if (resp.next === null) {
            break
          }
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error)
        this.errorFetchingCharacters = true
      }
        
      return this.characters
    },
    async getPeople (id) {
      this.character = 'Loading character...' // rewrite character value
      let films = []
      let vehicles = []
      
      // get person datas
      const response = await Api(`https://swapi.dev/api/people/${id}`)
    
      // Request the API to get the character films
      for (const filmURL of response.films) {
        const filmResponse = await Api(filmURL)
        // only push film title
        films.push(filmResponse.title)
        
        this.character = 'Loading films...'
      }
    
      // Request the API to get the character vehicles
      for (const vehicleURL of response.vehicles) {
        const vehicleResponse = await Api(vehicleURL)
        // only push vehicles title
        vehicles.push(vehicleResponse.name)

        this.character = 'Loading vehicles...'
      }
      
      // create this.character object
      this.character = {
        name: response.name,
        height: response.height,
        mass: response.mass,
        hair_color: response.hair_color,
        skin_color: response.skin_color,
        eye_color: response.eye_color,
        birth_year: response.birth_year,
        gender: response.gender,
        films: films,
        vehicles: vehicles,
      }
      
      return this.character
    }
  }
})
