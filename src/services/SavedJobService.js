import axios from "axios";

const Base_URL = "http://localhost:8081";

class SavedJobService{
    getSavedJobs(id){
        return axios.get(Base_URL + "/savedjob/" + id);
    }
    deleteSavedJob(savedjobkey){
        return axios.delete(Base_URL + "/savedjob/delete", savedjobkey);
    }
}

export default new SavedJobService(); 
