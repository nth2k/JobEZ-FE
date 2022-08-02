import axios from "axios";

const Base_URL = "http://localhost:8081";

const RecruiterRegisterService = {
  addRecruiter(recruiter) {
    return axios.post(Base_URL + "/recruiterRegister/register/", recruiter);
  },
  updateRecruiter(id, recruiter){
    return axios.put(Base_URL + "/recruiterOnlineCVForm/" + id, recruiter);
  }
}

export default RecruiterRegisterService;
