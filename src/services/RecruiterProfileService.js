import axios from "axios";

const Base_URL = "http://localhost:8080";

class RecruiterProfileService {
  async getRecruiterById(commit, recruiterId) {
    const body = {
      user_id: recruiterId,
    };
    await axios.post(Base_URL + "/recruiter", body).then((response) => {
      console.log("response.data: " + response.data);
      commit("SET_RECRUITER", response.data);
    });
  }
}

export default new RecruiterProfileService();
