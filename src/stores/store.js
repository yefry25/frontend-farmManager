import { defineStore } from 'pinia';

export const useStore = defineStore('all', {
  state: () => ({
    token: localStorage.token,
    usuario: JSON.parse(localStorage.getItem("usuario"))
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setToken(value) {
      localStorage.token = value;
      if (localStorage.token) {
        this.token = localStorage.token;
      } else {
        this.token = value;
      }
    },
    setUsuario(value) {
      localStorage.setItem("usuario", JSON.stringify(value));
      let user = JSON.parse(localStorage.getItem("usuario"));
      if (user) {
        this.usuario = user;
      }
    },
  },
});
