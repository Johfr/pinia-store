import { defineStore } from 'pinia'
import { Api } from '../composables/services.js'
import { User } from '../types/User.js'

export const useOptionStore = defineStore('optionStore', {
  state: () => {
    return {
      users: [{name: 'Jean', role: 'admin'}, {name: 'Jacques', role: 'super-admin'}, {name: 'Jane', role: 'user'}] as User[], // list of all users
      hasChanged: false as boolean
    }
  },
  getters: {
    getAdmins () {
      return this.users.filter(user => user.role.includes('admin'))
    }
  },
  actions: {
    async fetchApi () {}
  }
})
