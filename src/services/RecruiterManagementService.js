import axios from "axios";

const Base_URL = "http://localhost:8081";

class RecruiterManagementService {
  addPosting(post) {
    return axios.post(Base_URL + "/posting/addPosting", post);
  }
  getPostedPosting(userId) {
    return axios.get(Base_URL + "/posting/getPosting/" + userId);
  }
  updatePosting(postingId, posting){
    return axios.put(Base_URL + "/posting/updatePosting/" + postingId, posting);
  }
  getPostingById(postingId){
    return axios.get(Base_URL + "/posting/updatePosting/" + postingId);
  }
  deletePostingById(postingId){
    return axios.delete(Base_URL + "/posting/updatePosting/" + postingId);
  }
  getStatisticById(recruiterId){
    return axios.post(Base_URL + "/recruiter/recruiter-management", recruiterId);
  }
  getAppliedCandidate(recruiterId){
    return axios.post(Base_URL + "/recruiter/applied-candidate", recruiterId);
  }
  updateCandidateStatus(response){
    return axios.put(Base_URL + "/appliedjob/updateStatus", response);
  }
}

export default new RecruiterManagementService();