<script setup>
import { ref, computed } from 'vue'
import { useSetupStore } from '../stores/setupStore'

//SetupStore
const setupStore = useSetupStore()
const errors = computed(() => setupStore.errorFetchingCharacters)

// const storeNewValue = ref()
// // const initStore = () => 
// optionStore.$patch({ cars: [] })

// const addInStore = () => {
//   optionStore.$state.cars.push(storeNewValue.value)
// }

// const resetStore = () => optionStore.$reset({cars: null})
</script>

<template>
  <div class="home">
    <div>
      <h2>Pinia setup store</h2>
      <p>
        errors: {{ errors }}
      </p>

      <v-btn @click="setupStore.errorFetchingCharacters = !setupStore.errorFetchingCharacters">change errors value</v-btn>
      <!-- <v-btn @click="resetStore">Reset</v-btn> -->

      <!-- <form @submit.prevent>
        <input type="text" v-model="storeNewValue">
        <v-btn @click="addInStore">Add</v-btn>
      </form> -->
    </div>
  </div>
</template>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  padding-bottom: 50px;
}
</style>