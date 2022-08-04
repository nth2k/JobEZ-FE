import RecruiterProfileService from "@/services/RecruiterProfileService.js";

const state = {
  recruiter: [],
  isGetRecruiter: false,
};

const getters = {
  getRecruiter(state) {
    return state.recruiter;
  },
  isGetRecruiterFunction(state) {
    return state.isGetRecruiter;
  },
};

const actions = {
  getRecruiterById: async function ({ commit, state }, recruiterId) {
    state.isGetPosting = false;
    await RecruiterProfileService.getRecruiterById(commit, recruiterId);
  },
};

const mutations = {
  SET_RECRUITER: function (state, newRecruiter) {
    console.log("SET_RECRUITER is calling.... " + newRecruiter);
    state.recruiter = newRecruiter;
    state.isGetPosting = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
