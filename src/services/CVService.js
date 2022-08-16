import axios from "axios";

class CVService {
  async getCvByCandidateId(commit, candidateId) {
    const body = {
      candiate_id: candidateId,
    };
    await axios.post("http://localhost:8081/cv/id", body).then((response) => {
      commit("SET_CV", response.data);
    });
  }

  async updateCv(
    candidateEmail,
    desiredJobName,
    images,
    position,
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
      desired_jobName: desiredJobName,
      images: images,
      position: position,
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
    await axios
      .post("http://localhost:8081/cv/update", body)
      .then((response) => {
        console.log(response);
      });
  }
}
export default new CVService();
