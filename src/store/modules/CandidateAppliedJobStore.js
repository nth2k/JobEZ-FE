import AppliedJobService from "@/services/AppliedJobService";

const state = {
  appliedJob: null,
  isGetAppliedJob: false,
};

const getters = {
  getAppliedJob: function (state) {
    return state.appliedJob;
  },

  isGetAppliedJobFunction: function (state) {
    return state.isGetAppliedJob;
  },
};

const actions = {
  getAppliedJob: async function (
    { state, commit },
    { candidateEmail, recruiterEmail, postingId }
  ) {
    state.isGetAppliedJob = false;
    await AppliedJobService.addAppliedJob(
      commit,
      candidateEmail,
      recruiterEmail,
      postingId
    );
  },
};

const mutations = {
  SET_APPLIED_JOB: function (state, newAppliedJob) {
    state.appliedJob = newAppliedJob;
    state.isGetAppliedJob = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
