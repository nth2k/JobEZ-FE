import axios from "axios";

const Base_URL = "http://localhost:8081";

class AppliedJobService{
    getAppliedJobs(id){
        return axios.get(Base_URL + "/appliedjob/" + id);
    }
    deleteAppliedJob(id){
        return axios.delete(Base_URL + "/appliedjob/delete/" + id);
    }
}

export default new AppliedJobService(); 