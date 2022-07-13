import axios from "axios";

const Base_URL = "http://localhost:8001";

const RecruiterRegisterService = {
  addRecruiter(recruiter) {
    return axios.post(Base_URL + "/recruiterRegister/", recruiter);
  },
  getProvince() {
    return axios.get("https://provinces.open-api.vn/api/?depth=3");
  }
}

export default RecruiterRegisterService;