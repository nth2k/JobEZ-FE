import axios from "axios";

const Base_URL = "http://localhost:8080";

class SavedJobService{
    getSavedJobs(){
        return axios.get(Base_URL + "/savedjob/1");
    }
    deleteLanguage(id){
        return axios.delete(Base_URL + "/savedjob/delete/" + id)
    }
}

export default new SavedJobService();