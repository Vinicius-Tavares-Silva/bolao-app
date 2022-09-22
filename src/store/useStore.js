import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    logged: true,
  }),
  getters: {
    getLogged: (state) => state.logged,
  },
  actions: {
    logIn() {
      this.logged = true;
    },
    logOut() {
      this.logged = false;
    },
  },
})