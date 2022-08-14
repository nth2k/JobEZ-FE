import CVService from "@/services/CVService";

const state = {
  cv: null,
  isGetCv: false,
  candidateEmail: null,
  desiredJobName: null,
  images: null,
  position: null,
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
  updateCv: async function ({ state }, { email }) {
    CVService.updateCv(
      email,
      state.desiredJobName,
      state.images,
      state.position,
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
    { candidateName, desiredJobName, images }
  ) {
    commit("SET_CANDIDATE_NAME", candidateName);
    commit("SET_DESIRED_JOB_NAME", desiredJobName);
    commit("SET_IMAGE", images);
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
  SET_IMAGE: function (state, newImages) {
    console.log(newImages);
    state.images = newImages;
  },
  SET_CANDIDATE_NAME: function (state, newCandidateName) {
    console.log(newCandidateName);
    state.candidateName = newCandidateName;
  },
  SET_DESIRED_JOB_NAME: function (state, newJobName) {
    console.log(newJobName);
    state.desiredJobName = newJobName;
  },

  SET_DATE_OF_BIRTH: function (state, newDateOfBirth) {
    console.log(newDateOfBirth);
    state.dateOfBirth = newDateOfBirth;
  },
  SET_GENDER: function (state, newGender) {
    console.log(newGender);
    state.gender = newGender;
  },
  SET_PHONE: function (state, newPhone) {
    console.log(newPhone);
    state.phone = newPhone;
  },
  SET_EMAIL: function (state, newEmail) {
    console.log(newEmail);
    state.email = newEmail;
  },
  SET_ADDRESS: function (state, newAddress) {
    console.log(newAddress);
    state.address = newAddress;
  },
  SET_PROVINCE: function (state, newProvince) {
    console.log(newProvince);
    state.province = newProvince;
  },
  SET_CITY: function (state, newCity) {
    console.log(newCity);
    state.city = newCity;
  },
  SET_STREET: function (state, newStreet) {
    console.log(newStreet);
    state.street = newStreet;
  },
  SET_CAREER_GOAL: function (state, newCareerGoal) {
    console.log(newCareerGoal);
    state.careerGoal = newCareerGoal;
  },
  SET_SKILL: function (state, newSkill) {
    console.log(newSkill);
    state.skills = newSkill;
  },
  SET_AWARDS: function (state, newAwards) {
    console.log(newAwards);
    state.awards = newAwards;
  },
  SET_CERTIFICATE: function (state, newCertificate) {
    console.log(newCertificate);
    state.degrees = newCertificate;
  },
  SET_HOBBIES: function (state, newHobbies) {
    console.log(newHobbies);
    state.hobbies = newHobbies;
  },
  SET_EDUCATION: function (state, newEducation) {
    console.log(newEducation);
    state.educations = newEducation;
  },
  SET_ACTIVITY: function (state, newActivities) {
    console.log(newActivities);
    state.activities = newActivities;
  },
  SET_WORK_EXPERIENCE: function (state, newWorkExperience) {
    console.log(newWorkExperience);
    state.workExperiences = newWorkExperience;
  },
  SET_PROJECT: function (state, newProject) {
    console.log(newProject);
    state.involvedProjects = newProject;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
