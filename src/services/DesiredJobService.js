import axios from "axios";

const Base_URL = "http://localhost:8081";

class DesiredJobService{
    getDesiredJobByUserId(id){
        return axios.get(Base_URL + "/desiredjob/" + id);
    }
    updateDesiredJob(desiredjob){
        return axios.post(Base_URL + "/desiredjob/update", desiredjob);
    }
}
export default new DesiredJobService();