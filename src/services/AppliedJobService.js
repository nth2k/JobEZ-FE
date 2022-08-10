import axios from "axios";

const Base_URL = "http://localhost:8081";

class AppliedJobService{
    getAppliedJobs(id){
        return axios.get(Base_URL + "/appliedjob/" + id);
    }
    deleteAppliedJob(AppliedJobKey){
        return axios.post(Base_URL + "/appliedjob/remove" , AppliedJobKey);
    }
}

export default new AppliedJobService();
