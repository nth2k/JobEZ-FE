import axios from "axios";

const Base_URL = "http://localhost:8080";

class WorkExpService{
    getWorkExps(){
        return axios.get(Base_URL + "/workexp/1")
    }
    deleteWorkExp(id){
        return axios.delete(Base_URL + "/workexp/delete/" + id );
    }
    addWorkExp(WorkExp){
        return axios.post(Base_URL + "/workexp/add", WorkExp);
    }
}
export default new WorkExpService();