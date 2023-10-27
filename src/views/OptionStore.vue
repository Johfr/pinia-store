<script setup lang="ts">
import { ref, computed, toRef } from 'vue'
import { useOptionStore } from '../stores/optionStore'
import User from '../types/User'

// destructuration
// import { storeToRefs } from 'pinia'
// const optionStore = useOptionStore()
// const {users}= storeToRefs(optionStore)

// Get OptionStore
const optionStore = useOptionStore()
const admins = computed((): User[] => optionStore.getAdmins)
const users = computed((): User[] => optionStore.users)
//reset store
const resetStore = () => optionStore.$reset()
// Mutating the state : prefere actions instead of $patch()
const addUser = (name: string | undefined, role: string | undefined, age: number | undefined) => {
  optionStore.$patch((state): void => {
    state.users.push(
      {
        name,
        role,
        age,
      }
    )

    state.hasChanged = true
  })
}
// Subscribing to the state
optionStore.$subscribe((mutation, state) => {
  console.log(state)
  console.log(mutation)
  
})
// FORM
// vmodel
const userName = ref<string | undefined>('Toto')
const userRole = ref<string | undefined>('Admin')
const userAge = ref<number | undefined>(15)
// submit form
const submitForm = (e) => {  
  // const data = new FormData(e.target)

  // for (const pair of data.entries()) {
  //   const [name, value] = pair;
  //   console.log(name, value);
  // }
  
  if (userName.value && userRole.value || userAge.value) {
    addUser(userName.value, userRole.value, userAge.value)
  }
  
}
</script>

<template>
  <div class="home">
    <div>
      <h2>Pinia option store</h2>
      <p>
        store.$state : {{ optionStore.$state }}
      </p>
      <p>
        store.$state.users : {{ optionStore.$state.users }}
      </p>
      <p>
        store.users : {{ optionStore.users }}
      </p>
      <p>
        users: {{ users }}
      </p>
      <p>
        admins: {{ admins }}
      </p>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="userName" placeholder="name*" name="name">
        <input type="text" v-model="userRole" placeholder="role*" name="role">
        <input type="text" v-model="userAge" placeholder="age" name="age">

        <input type="submit" value="Add user">
        <v-btn @click="resetStore">.$reset()</v-btn>
      </form>
    </div>

    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  padding-bottom: 50px;

  input {
    border-bottom: 1px solid;
  }
}
</style>