import Vue from "vue";
import Vuex from "vuex";
import jobDetailStore from "./modules/JobDetailStore";
import JobCategoryStore from "./modules/JobCategoryStore";
import RecruiterProfileStore from "./modules/RecruiterProfileStore";
import RecruiterListStore from "@/store/modules/RecruiterListStore";
import CandidateProfileStore from "@/store/modules/CandidateProfileStore";
import GeneralManagementStore from "@/store/modules/GeneralManagementStore";
import CVStore from "@/store/modules/CVStore";
import CandidateAppliedJobStore from "@/store/modules/CandidateAppliedJobStore";
import CandidateSavedJobStore from "@/store/modules/CandidateSavedJobStore";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jobDetailStore,
    JobCategoryStore,
    RecruiterProfileStore,
    RecruiterListStore,
    CandidateProfileStore,
    GeneralManagementStore,
    CVStore,
    CandidateAppliedJobStore,
    CandidateSavedJobStore,
  },
  state: {
    snackbars: [],
  },
  mutations: {
    setTransaction(state, transaction) {
      state.transaction = transaction;
    },
    SET_SNACKBAR(state, snackbar) {
      state.snackbars = state.snackbars.concat(snackbar);
    },
  },
  actions: {
    fetchTransaction({ commit }, { id }) {
      commit("setTransaction", id);
    },
    setSnackbar({ commit }, snackbar) {
      snackbar.showing = true;
      snackbar.color = snackbar.color || "success";
      commit("SET_SNACKBAR", snackbar);
    },
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
  },
});
