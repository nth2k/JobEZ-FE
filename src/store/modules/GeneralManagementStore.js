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
    return state.suitablePosting != [];
  },
};

const actions = {
  getSuitablePosting({ commit }, { email }) {
    GeneralManagementService.getSuitablePosting(commit, email);
  },
};

const mutations = {
  SET_SUITABLE_POSTING: function (state, newSuitablePosting) {
    state.suitablePosting = newSuitablePosting;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
