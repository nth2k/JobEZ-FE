import axios from "axios";

const Base_URL = "http://localhost:8081";

class CVService {
  async getCvByCandidateId(commit, candidateId) {
    const body = {
      candiate_id: candidateId,
    };
    await axios.post(Base_URL + "/cv/id", body).then((response) => {
      commit("SET_CV", response.data);
    });
  }

  async updateCv(
    commit,
    candidateEmail,
    candidateName,
    desiredJobName,
    images,
    position,
    dateOfBirth,
    gender,
    phone,
    address,
    province,
    city,
    street,
    careerGoal,
    skills,
    awards,
    degrees,
    hobbies,
    educations,
    workExperiences,
    activities,
    involvedProjects
  ) {
    const body = {
      email: candidateEmail,
      name: candidateName,
      desired_jobName: desiredJobName,
      images: images,
      position: position,
      dateOfBirth: dateOfBirth,
      gender: gender,
      phone: phone,
      province: province,
      city: city,
      street: street,
      career_goal: careerGoal,
      skills: skills,
      awards: awards,
      degrees: degrees,
      hobbies: hobbies,
      educations: educations,
      work_experiences: workExperiences,
      activities: activities,
      involved_projects: involvedProjects,
    };
    console.log(body);
    await axios.put(Base_URL + "/update").then((response) => {
      console.log("CV update service");
      commit("SET_CV", response.data);
    });
  }
}
export default new CVService();
