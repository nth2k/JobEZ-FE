import axios from "axios";

const Base_URL = "http://localhost:8081";

class WorkExpService {
    getWorkExps(id) {
        return axios.get(Base_URL + "/workexp/" + id)
    }
    deleteWorkExp(id) {
        return axios.delete(Base_URL + "/workexp/delete/" + id);
    }
    addWorkExp(WorkExp) {
        return axios.post(Base_URL + "/workexp/add", WorkExp);
    }
    isDuplicate(WorkExp){
        return axios.post(Base_URL + "/workexp/isDuplicate", WorkExp);
    }
}
export default new WorkExpService(); 
