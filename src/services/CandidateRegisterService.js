import axios from "axios";

const Base_URL = "http://localhost:8001";

const CandidateRegisterService  = {
  addCandidate(candidate) {
    return axios.post(Base_URL + "/candidateRegister/" , candidate);
  },
  getCombobox(){
    return axios.get(Base_URL + "/candidateOnlineCVForm/")
  }
}

export default CandidateRegisterService;
