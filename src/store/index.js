import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    revealed: true,
    isLandscape: true
  },
  mutations: {
    setLandscape(state, argument) {
      this.state.isLandscape = argument.result;
    },
    setReveal(state, argument){
      this.state.revealed = argument.result
    }
  },
  actions: {},
  modules: {}
});
