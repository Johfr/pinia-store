import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSetupStore = defineStore('setupStore', () => {
  const errorFetchingCharacters = ref(false)
  const getCharacters = async () => {

  }

  return {
    errorFetchingCharacters,
    getCharacters,
  }
})
