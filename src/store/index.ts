import Vue from "vue";
import Vuex from "vuex";
import card from "./card";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    card
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
