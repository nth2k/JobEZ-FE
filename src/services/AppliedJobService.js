import axios from "axios";

const Base_URL = "http://localhost:8081";

class AppliedJobService {
  getAppliedJobs(id) {
    return axios.get(Base_URL + "/appliedjob/" + id);
  }
  deleteAppliedJob(AppliedJobKey) {
    console.log(AppliedJobKey);
    return axios.post(Base_URL + "/appliedjob/remove", AppliedJobKey);
  }
  async addAppliedJob(commit, candidateEmail, recruiterEmail, postingId) {
    const body = {
      candidte_email: candidateEmail,
      recruiter_email: recruiterEmail,
      posting_id: postingId,
    };
    await axios.post(Base_URL + "/appliedjob/add", body).then((response) => {
      commit("SET_APPLIED_JOB", response.data);
    });
  }
}

export default new AppliedJobService();
