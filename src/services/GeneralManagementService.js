import axios from "axios";

const Base_URL = "http://localhost:8081";

class GeneralManagementService {
  async getSuitablePosting(commit, email) {
    const body = {
      email: email,
    };
    await axios.post(Base_URL + "/posting/suitable", body).then((response) => {
      commit("SET_SUITABLE_POSTING", response.data);
    });
  }
}
export default new GeneralManagementService();
