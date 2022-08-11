import axios from "axios";

const Base_URL = "http://localhost:8081";

class SavedJobService{
    getSavedJobs(id){
        return axios.get(Base_URL + "/savedjob/" + id);
    }
    deleteSavedJob(savedjobkey){
        return axios.post(Base_URL + "/savedjob/remove", savedjobkey);
    }
}

export default new SavedJobService();
