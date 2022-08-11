import CVService from "@/services/CVService";

const state = {
  cv: null,
  isGetCv: false,
  candidateEmail: null,
  candidateName: null,
  desiredJobName: null,
  images: null,
  position: null,
  dateOfBirth: null,
  gender: null,
  phone: null,
  address: null,
  province: null,
  city: null,
  street: null,
  careerGoal: null,
  skills: null,
  awards: null,
  degrees: null,
  hobbies: null,
  educations: null,
  workExperiences: null,
  activities: null,
  involvedProjects: null,
  numberOfEffectColumn: null,
};

const getters = {
  getCV: function (state) {
    return state.cv;
  },

  isGetCvFunction: function (state) {
    return state.isGetCv;
  },

  getImages: function (state) {
    return state.images;
  },
};

const actions = {
  getCvByCandidateId: async function ({ state, commit }, { candidateId }) {
    state.isGetCv = false;
    await CVService.getCvByCandidateId(commit, candidateId);
  },
  updateCv: async function ({ state, commit }) {
    CVService.updateCv(
      commit,
      state.candidateEmail,
      state.candidateName,
      state.desiredJobName,
      state.images,
      state.position,
      state.dateOfBirth,
      state.gender,
      state.phone,
      state.province,
      state.city,
      state.street,
      state.careerGoal,
      state.skills,
      state.awards,
      state.degrees,
      state.hobbies,
      state.educations,
      state.workExperiences,
      state.activities,
      state.involvedProjects
    );
  },

  setHeaderData: function (
    { commit },
    { candidateEmail, candidateName, desiredJobName, images }
  ) {
    commit("SET_CANDIDATE_EMAIL", candidateEmail);
    commit("SET_CANDIDATE_NAME", candidateName);
    commit("SET_DESIRED_JOB_NAME", desiredJobName);
    commit("SET_IMAGE", images);
  },
  setBasicInformationData: function (
    { commit },
    { dateOfBirth, gender, phone, email, address, province, city, street }
  ) {
    commit("SET_DATE_OF_BIRTH", dateOfBirth);
    commit("SET_GENDER", gender);
    commit("SET_PHONE", phone);
    commit("SET_EMAIL", email);
    commit("SET_ADDRESS", address);
    commit("SET_PROVINCE", province);
    commit("SET_CITY", city);
    commit("SET_STREET", street);
  },
  setCareerGoal: function ({ commit }, { careerGoals }) {
    commit("SET_CAREER_GOAL", careerGoals);
  },
  setSkills: function ({ commit }, { skills }) {
    commit("SET_SKILL", skills);
  },
  setAwards: function ({ commit }, { awards }) {
    commit("SET_AWARDS", awards);
  },
  setCertificate: function ({ commit }, { certificate }) {
    commit("SET_CERTIFICATE", certificate);
  },
  setHobbies: function ({ commit }, { hobbies }) {
    commit("SET_HOBBIES", hobbies);
  },
  setEducation: function ({ commit }, { education }) {
    commit("SET_EDUCATION", education);
  },
  setActivity: function ({ commit }, { activities }) {
    commit("SET_ACTIVITY", activities);
  },
  setWorkExperience: function ({ commit }, { workExperience }) {
    commit("SET_WORK_EXPERIENCE", workExperience);
  },
  setParticipantProject: function ({ commit }, { participantProject }) {
    commit("SET_PROJECT", participantProject);
  },
};

const mutations = {
  SET_CV: function (state, newCv) {
    state.cv = newCv;
    state.isGetCv = true;
  },
  UPDATE_CV: function (state, effectColumn) {
    state.numberOfEffectColumn = effectColumn;
  },
  SET_CANDIDATE_EMAIL: function (state, newEmail) {
    state.candidateEmail = newEmail;
  },
  SET_IMAGE: function (state, newImages) {
    state.images = newImages;
  },
  SET_CANDIDATE_NAME: function (state, newCandidateName) {
    state.candidateName = newCandidateName;
  },
  SET_DESIRED_JOB_NAME: function (state, newJobName) {
    state.desiredJobName = newJobName;
  },

  SET_DATE_OF_BIRTH: function (state, newDateOfBirth) {
    state.dateOfBirth = newDateOfBirth;
  },
  SET_GENDER: function (state, newGender) {
    state.gender = newGender;
  },
  SET_PHONE: function (state, newPhone) {
    state.phone = newPhone;
  },
  SET_EMAIL: function (state, newEmail) {
    state.email = newEmail;
  },
  SET_ADDRESS: function (state, newAddress) {
    state.address = newAddress;
  },
  SET_PROVINCE: function (state, newProvince) {
    state.province = newProvince;
  },
  SET_CITY: function (state, newCity) {
    state.city = newCity;
  },
  SET_STREET: function (state, newStreet) {
    state.street = newStreet;
  },
  SET_CAREER_GOAL: function (state, newCareerGoal) {
    state.careerGoal = newCareerGoal;
  },
  SET_SKILL: function (state, newSkill) {
    state.skills = newSkill;
  },
  SET_AWARDS: function (state, newAwards) {
    state.awards = newAwards;
  },
  SET_CERTIFICATE: function (state, newCertificate) {
    state.degrees = newCertificate;
  },
  SET_HOBBIES: function (state, newHobbies) {
    state.hobbies = newHobbies;
  },
  SET_EDUCATION: function (state, newEducation) {
    state.educations = newEducation;
  },
  SET_ACTIVITY: function (state, newActivities) {
    state.activities = newActivities;
  },
  SET_WORK_EXPERIENCE: function (state, newWorkExperience) {
    state.workExperiences = newWorkExperience;
  },
  SET_PROJECT: function (state, newProject) {
    state.involvedProjects = newProject;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
