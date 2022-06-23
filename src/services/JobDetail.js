import axios from "axios";

const Base_URL = "http://localhost:8080";

class JobDetail {
  getJobById() {
    return axios.get(Base_URL + "/posting/");
  }
}

export default new JobDetail();
