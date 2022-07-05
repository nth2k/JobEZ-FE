import axios from "axios";

const Base_URL = "http://localhost:8080";

class AppliedJobService{
    getAppliedJobs(){
        return axios.get(Base_URL + "/appliedjob/1");
    }
    deleteAppliedJob(id){
        return axios.delete(Base_URL + "/appliedjob/delete/" + id);
    }
}

export default new AppliedJobService();