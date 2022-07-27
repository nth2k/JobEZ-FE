import axios from "axios";

const Base_URL = "http://localhost:8001";

const RecruiterRegisterService = {
  addRecruiter(recruiter) {
    return axios.post(Base_URL + "/candidate/register/", recruiter);
  },
  updateRecruiter(id, recruiter){
    return axios.put(Base_URL + "/recruiterOnlineCVForm/" + id, recruiter);
  }
}

export default RecruiterRegisterService;
