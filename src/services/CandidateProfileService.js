import axios from "axios";

const Base_URL = "http://localhost:8081";

class CandidateProfileService {
  async getCandidateById(commit, candidateId) {
    const body = {
      candidate_id: candidateId,
    };
    axios
      .post(Base_URL + "/posting/city/" + candidateId, body)
      .then((response) => {
        commit("SET_POSTING", response.data);
      });
  }
}

export default new CandidateProfileService();
