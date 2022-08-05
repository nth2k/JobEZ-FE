import axios from "axios";
const Base_URL = "http://localhost:8080";

class RecruiterProfileService {
  getAllRecruiter(commit) {
    axios.post(Base_URL + "/recruiter/find-all").then((response) => {
      commit("SET_RECRUITERS", response.data);
    });
  }
}

export default new RecruiterProfileService();
