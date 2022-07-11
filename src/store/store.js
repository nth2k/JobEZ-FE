import Vue from "vue";
import Vuex from "vuex";
import jobDetailStore from "./modules/JobDetailStore";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jobDetailStore,
  },
});
