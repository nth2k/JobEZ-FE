import SavedJobService from "@/services/SavedJobService";

const state = {
  savedJob: null,
  isGetSavedJob: false,
};

const getters = {
  getSavedJob: function (state) {
    return state.savedJob;
  },

  isGetSavedJobFunction: function (state) {
    return state.isGetSavedJob;
  },
};

const actions = {
  getSavedJob: async function ({ state, commit }, { email, postingId }) {
    state.isGetSavedJob = false;
    await SavedJobService.addSavedJob(commit, email, postingId);
  },
};

const mutations = {
  SET_SAVED_JOB: function (state, newSavedJob) {
    state.savedJob = newSavedJob;
    state.isGetSavedJob = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
