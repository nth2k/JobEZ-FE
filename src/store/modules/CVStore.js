import CVService from "@/services/CVService";

const state = {
  cv: null,
  isGetCv: false,
  candidateName: "",
  images: "",
  position: "",
  dateOfBirth: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  careerGoal: "",
  skills: "",
  awards: "",
  degrees: "",
  hobbies: "",
  educations: "",
  workExperiences: "",
  activities: "",
  involvedProjects: "",
};

const getters = {
  getCV: function (state) {
    return state.cv;
  },

  isGetCvFunction: function (state) {
    return state.isGetCv;
  },
};

const actions = {
  getCvByCandidateId: async function ({ state, commit }, { candidateId }) {
    console.log("Get Cv By Candidate Id Store");
    console.log("candidateId : " + candidateId);
    state.isGetCv = false;
    await CVService.getCvByCandidateId(commit, candidateId);
  },
};

const mutations = {
  SET_CV: function (state, newCv) {
    state.cv = newCv;
    state.isGetCv = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
