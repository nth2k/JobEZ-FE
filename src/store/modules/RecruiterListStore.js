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
    return state.recruiters === null;
  },

  getStore(state) {
    return state.recruiters;
  },
};

const actions = {
  getAllRecruiter({ commit }) {
    RecruiterListService.getAllRecruiter(commit);
  },
};

const mutations = {
  SET_RECRUITERS: function (state, newRecruiters) {
    state.recruiters = newRecruiters;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
