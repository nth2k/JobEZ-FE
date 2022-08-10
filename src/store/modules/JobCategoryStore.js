import JobCategoryService from "@/services/JobCategoryService";

const state = {
  postings: [],
  isPostingCategory: false,
  isProvince: false,
  isCity: false,
  isGetPosting: false,
};

const getters = {
  getPostings: function (state) {
    return state.postings;
  },
  isGetPostingFunction: function (state) {
    return state.isGetPosting;
  },

  isPostingCategoryFunction: function (state) {
    return state.isPostingCategory;
  },
  isProvinceFunction: function (state) {
    return state.isProvince;
  },
  isCityFunction: function (state) {
    return state.isCity;
  },
};

const actions = {
  getPostingByCategory: async (
    { commit, state },
    { categoryId, pageOffSet }
  ) => {
    state.isGetPosting = false;
    await JobCategoryService.getPostingByCategory(
      commit,
      categoryId,
      pageOffSet
    );
    state.isPostingCategory = true;
    state.isProvince = false;
    state.isCity = false;
  },
  getPostingByProvince: async (
    { commit, state },
    { provinceId, pageOffSet }
  ) => {
    state.isGetPosting = false;
    await JobCategoryService.getPostingByProvince(
      commit,
      provinceId,
      pageOffSet
    );
    state.isProvince = true;
    state.isPostingCategory = false;
    state.isCity = false;
  },
  getPostingByCity: async ({ commit, state }, { cityId, pageOffSet }) => {
    state.isGetPosting = false;
    await JobCategoryService.getPostingByCity(commit, cityId, pageOffSet);
    state.isCity = true;
    state.isPostingCategory = false;
    state.isProvince = false;
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
