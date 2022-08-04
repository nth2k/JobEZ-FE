import axios from "axios";

const Base_URL = "http://localhost:8081";

class LandingPageService {
  getHomePage() {
    return axios.get(Base_URL + "/home/");
  }
}

export default new LandingPageService();
