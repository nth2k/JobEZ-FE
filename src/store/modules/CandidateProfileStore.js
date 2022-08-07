import CandidateProfileService from "@/services/CandidateProfileService";

const state = {
  candidate: null,
  isGetCandidate: false,
};

const getters = {
  getCanidate(state) {
    return state.candidate;
  },

  isGetCandidateFunction(state) {
    return state.candidate != null;
  },
};

const actions = {
  getCandiateById: async function ({ commit }, { candidateId }) {
    await CandidateProfileService.getCandidateById(commit, candidateId);
  },
};

const mutations = {
  SET_CANDIDATE_CV: function (state, newCandidate) {
    state.candidate = newCandidate;
    state.isGetCandidate = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
