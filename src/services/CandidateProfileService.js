import axios from "axios";

const Base_URL = "http://localhost:8081";

class CandidateProfileService {
  async getCandidateById(commit, candidateId) {
    const body = {
      candidate_id: candidateId,
    };
    await axios.post(Base_URL + "/candidate/id", body).then((response) => {
      commit("SET_CANDIDATE_CV", response.data);
    });
  }
}

export default new CandidateProfileService();
