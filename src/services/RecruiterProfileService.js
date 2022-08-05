import axios from "axios";

const Base_URL = "http://localhost:8080";

class RecruiterProfileService {
  async getRecruiterById(commit, recruiterId) {
    await axios
      .post(Base_URL + "/recruiter", {
        user_id: recruiterId,
      })
      .then((response) => {
        commit("SET_RECRUITER", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new RecruiterProfileService();
