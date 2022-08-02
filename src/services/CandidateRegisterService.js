import axios from "axios";

const Base_URL = "http://localhost:8081";

const CandidateRegisterService  = {
  addCandidate(candidate) {
    return axios.post(Base_URL + "/candidate/register/" , candidate);
  },
  getCombobox(){
    return axios.get(Base_URL + "/candidateOnlineCVForm/")
  },
  updateCandidate(id, candidate){
    return axios.put(Base_URL + "/candidateOnlineCVForm/" + id, candidate);
  },
  updateCandidate2(id, candidate){
    return axios.put(Base_URL + "/cvFromPCForm/" + id, candidate);
  }
}

export default CandidateRegisterService;
