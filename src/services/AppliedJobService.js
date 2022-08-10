import axios from "axios";

const Base_URL = "http://localhost:8081";

class AppliedJobService {
  getAppliedJobs(id) {
    return axios.get(Base_URL + "/appliedjob/" + id);
  }
  deleteAppliedJob(id) {
    return axios.delete(Base_URL + "/appliedjob/delete/" + id);
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
