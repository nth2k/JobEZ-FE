import RecruiterProfileService from "@/services/RecruiterProfileService.js";

const state = {
  recruiter: null,
  isGetRecruiter: false,
};

const getters = {
  getRecruiter: function (state) {
    return state.recruiter;
  },
  isGetRecruiterFunction: function (state) {
    if (state.recruiter != null) return true;
  },
};

const actions = {
  getRecruiterById: async ({ commit, state }, recruiterId) => {
    state.isGetPosting = false;
    await RecruiterProfileService.getRecruiterById(commit, recruiterId);
  },
};

const mutations = {
  SET_RECRUITER: function (state, newRecruiter) {
    state.recruiter = JSON.parse(JSON.stringify(newRecruiter));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
