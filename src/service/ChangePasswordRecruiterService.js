import axios from "axios";

const Base_URL = "http://localhost:8081";

class changePasswordRecruiterService{
    changePassword(user){
        return axios.post(Base_URL + "/Changepwd/", user);
    }
}

export default new changePasswordRecruiterService();