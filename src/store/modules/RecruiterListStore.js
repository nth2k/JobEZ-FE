import RecruiterListService from "@/services/RecruiterListService";

const state = {
  recruiters: null,
  isGetAllRecruiters: false,
};

const getters = {
  getRecruiters: (state) => {
    return state.recruiters;
  },

  isGetAllRecruitersFunction: async (state) => {
    return state.isGetAllRecruiters;
  },

  getStore(state) {
    return state.recruiters;
  },
};

const actions = {
  async getAllRecruiter({ state, commit }) {
    state.isGetAllRecruiters = false;
    await RecruiterListService.getAllRecruiter(commit);
  },
};

const mutations = {
  SET_RECRUITERS: function (state, newRecruiters) {
    state.recruiters = newRecruiters;
    state.isGetAllRecruiters = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
