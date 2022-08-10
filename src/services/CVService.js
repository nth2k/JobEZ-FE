import axios from "axios";

const Base_URL = "http://localhost:8081";

class CVService {
  async getCvByCandidateId(commit, candidateId) {
    const body = {
      candiate_id: candidateId,
    };
    await axios.post(Base_URL + "/cv/id", body).then((response) => {
      console.log("Get Cv By Candidate Id Service");
      console.log(response.data);
      commit("SET_CV", response.data);
    });
  }
}
export default new CVService();
