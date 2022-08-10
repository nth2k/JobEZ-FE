import GeneralManagementService from "@/services/GeneralManagementService";

const state = {
  suitablePosting: [],
  isGetSuitablePosting: false,
};

const getters = {
  getSuitablePosting: function (state) {
    return state.suitablePosting;
  },

  isGetSuitablePostingFunction: function (state) {
    return state.isGetSuitablePosting;
  },
};

const actions = {
  getSuitablePosting({ state, commit }, { email }) {
    state.isGetSuitablePosting = false;
    GeneralManagementService.getSuitablePosting(commit, email);
  },
};

const mutations = {
  SET_SUITABLE_POSTING: function (state, newSuitablePosting) {
    state.suitablePosting = newSuitablePosting;
    state.isGetSuitablePosting = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
