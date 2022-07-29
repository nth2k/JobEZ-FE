import axios from "axios";

const Base_URL = "http://localhost:8080";

class WorkExpService{
    getWorkExps(id){
        return axios.get(Base_URL + "/workexp/" + id)
    }
    deleteWorkExp(id){
        return axios.delete(Base_URL + "/workexp/delete/" + id);
    }
    addWorkExp(WorkExp, userId){
        return axios.post(Base_URL + "/workexp/add/" + userId, WorkExp);
    }
}
export default new WorkExpService();