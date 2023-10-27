<script setup>
import { computed, ref } from 'vue'
import { useStarwarsApi } from '../src/stores/store'
import { VDataTable } from 'vuetify/lib/labs/components.mjs'

// init store on created
const starwarsStore = useStarwarsApi()

// get characters from store
const characters = computed(() => starwarsStore.characters)
const errorFetching = computed(() => starwarsStore.errorFetchingCharacters)

// Vuetify data for header table component
const tableHeaders = [
  {
    title: 'name',
    align: 'start',
    sortable: true,
    key: 'name',
  },
  { title: 'height', key: 'height', sortable: false, },
  { title: 'gender', key: 'gender', sortable: false, },
  { title: 'Actions', key: 'actions', sortable: false },
]

</script>

<template>
  <div class="greetings">
    <!-- handling errors -->
    <h3 class="text-red" v-if="errorFetching">Une erreur s'est produite lors de la récupération des données. Merci de recharger la page.</h3>

    <!-- list of characters -->
    <VDataTable
      v-if="!errorFetching"
      :headers="tableHeaders"
      :items="characters"
      :loading="characters.length === 0"
      class="elevation-1"
      items-per-page= "10"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Starwars characters</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          :to="{name : 'people', params: { id: parseInt(item.url.split('/')[5]) } }"
        >
         Voir
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
        >
          Reset
        </v-btn>
      </template>
    </VDataTable>
  </div>
</template>
