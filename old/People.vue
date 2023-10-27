<script setup>
import { computed, ref, defineProps, watchEffect } from 'vue'
import { useStarwarsApi } from '../src/stores/store'
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs'

const props = defineProps({
  id: String // params id as props via router/index.js
})

// init the store
const starwarsStore = useStarwarsApi()

// fetch APi from store with param id
starwarsStore.getPeople(props.id)

// get character from store
const character = computed(() => starwarsStore.character)

</script>

<template>
  <div class="details">
    <h1>Starwars Character</h1>
    
    <!-- if character is a string -->
    <h2 v-if="typeof character === 'string' ">{{ character }}</h2>
    <VSkeletonLoader v-if="typeof character === 'string' " type="list-item-three-line" />

    <!-- v-else -->
    <div v-else>
      <p>
        <span class="font-weight-bold">name:</span>
        {{ character.name }}
      </p>
      <p>
        <span class="font-weight-bold">height:</span>
        {{ character.height }} cm
      </p>
      <p>
        <span class="font-weight-bold">mass:</span>
        {{ character.mass }} kg
      </p>
      <p>
        <span class="font-weight-bold">hair color:</span>
        {{ character.hair_color }}
      </p>
      <p>
        <span class="font-weight-bold">skin color:</span>
        {{ character.skin_color }}
      </p>
      <p>
        <span class="font-weight-bold">eye color:</span>
        {{ character.eye_color }}
      </p>
      <p>
        <span class="font-weight-bold">birth year:</span>
        {{ character.birth_year }}
      </p>
      <p>
        <span class="font-weight-bold">gender:</span>
        {{ character.gender }}
      </p>

      <!-- films -->
      <p v-if="character.films && character.films.length > 0">
        <span class="font-weight-bold">Films: </span>
        {{ character.films.join(', ') }}
      </p>

      <!-- vehicles -->
      <p v-if="character.vehicles && character.vehicles.length > 0">
        <span class="font-weight-bold">vehicles: </span>         
        {{ character.vehicles.join(', ') }}
      </p>
    </div>
  </div>
</template>

<style>
  .details {
  max-width: 550px;
  }
</style>