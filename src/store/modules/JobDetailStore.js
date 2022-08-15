import axios from "axios";

const state = {
  id: null,
  job: null,
  isGetAPI: false,
};

const getters = {
  getJob: (state) => state.job,
  isGetAPI: (state) => state.isGetAPI,
};

const actions = {
  getJobById: async ({ commit, state }, { postingId }) => {
    state.isGetAPI = false;
    await axios
      .post("http://localhost:8081" + "/posting/" + postingId, {
        posting_id: postingId,
      })
      .then((response) => {
        commit("SET_JOB", response.data);
      });
  },
};

const mutations = {
  SET_JOB: function (state, newJob) {
    state.job = newJob;
    state.isGetAPI = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
