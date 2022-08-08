import axios from "axios";

const Base_URL = "http://localhost:8081";

class DegreeService{
    addCertificate(Certificate){
        return axios.post(Base_URL + "/degree/add" + Certificate);
    }
}
export default new DegreeService();