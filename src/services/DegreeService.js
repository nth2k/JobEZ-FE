import axios from "axios";

const Base_URL = "http://localhost:8081";

class DegreeService {
    getAllDegrees(userId){
        return axios.get(Base_URL + "/degree/"+ userId); 
    }
    getDegree(id){
        return axios.get(Base_URL + "/degree/edit/"+ id); 
    }
    addDegree(degree) {
        return axios.post(Base_URL + "/degree/add", degree);
    }
    updateDegree(degree) {
        return axios.post(Base_URL + "/degree/update", degree);
    }
    deleteDegree(id, userId) {
        return axios.delete(Base_URL + "/degree/delete/" + id + "/" + userId);
    }
}
export default new DegreeService();