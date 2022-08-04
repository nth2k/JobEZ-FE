import axios from "axios";

const Base_URL = "http://localhost:8080";

class CandidateChangePassword{
    getPassword(id){
        return axios.get(Base_URL + "/candidate/changepassword/" + id);
    }
    submitChangePassword(user){
        return axios.post(Base_URL + "/candidate/change", user);
    }
}
export default CandidateChangePassword();