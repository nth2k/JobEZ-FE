import axios from "axios";

const Base_URL = "http://localhost:8001";

const RecruiterRegisterService = {
  addRecruiter(recruiter) {
    return axios.post(Base_URL + "/recruiterRegister/", recruiter);
  },
}

export default RecruiterRegisterService;
