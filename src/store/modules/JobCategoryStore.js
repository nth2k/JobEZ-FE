import JobCategoryService from "@/services/JobCategoryService";

const state = {
  postings: [],
  isGetPosting: false,
};

const getters = {
  getPostings: function (state) {
    return state.postings;
  },
  isGetPostingFunction: function (state) {
    return state.isGetPosting;
  },
};

const actions = {
  getPostingByCategory: async (
    { commit, state },
    { categoryId, pageOffSet }
  ) => {
    state.isGetPosting = false;
    JobCategoryService.getPostingByCategory(commit, categoryId, pageOffSet);
  },
  getPostingByProvince: async (
    { commit, state },
    { provinceId, pageOffSet }
  ) => {
    state.isGetPosting = false;
    JobCategoryService.getPostingByProvince(commit, provinceId, pageOffSet);
  },
  getPostingByCity: async ({ commit, state }, { cityId, pageOffSet }) => {
    state.isGetPosting = false;
    JobCategoryService.getPostingByCity(commit, cityId, pageOffSet);
  },
};

const mutations = {
  SET_POSTING: function (state, newPostings) {
    state.postings = newPostings;
    state.isGetPosting = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
