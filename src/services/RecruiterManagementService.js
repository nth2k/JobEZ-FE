import axios from "axios";

const Base_URL = "http://localhost:8081";

class RecruiterManagementService {
  addPosting(post) {
    return axios.post(Base_URL + "/posting/addPosting", post);
  }
}

export default new RecruiterManagementService();