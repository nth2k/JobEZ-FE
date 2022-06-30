import axios from "axios";

const Base_URL = "http://localhost:8001";

class RecruiterRegisterService {
  addRecruiter(recruiter) {
    return axios.post(Base_URL + "/candidateRegister/" , recruiter);
  }
}

export default new RecruiterRegisterService();
