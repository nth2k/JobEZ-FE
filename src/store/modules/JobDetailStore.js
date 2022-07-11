import axios from "axios";

export default {
  // initial state
  state: {
    id: null,
    job: null,
  },
  getters: {
    getJob(state) {
      return state.job;
    },
  },
  // actions
  actions: {
    getJobById: async ({ commit }, id) => {
      await axios
        .get("http://localhost:8080" + "/posting/" + id)
        .then((response) => {
          commit("SET_JOB", response.data);
        });
    },
  },
  // mutations
  mutations: {
    SET_JOB: function (state, newJob) {
      state.job = newJob;
    },
  },
};
