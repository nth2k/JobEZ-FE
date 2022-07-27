import axios from "axios";

const Base_URL = "http://localhost:8001";

class LoginService {
  getUser(user) {
    return axios.post(Base_URL + "/candidate/login", user, {withCredentials: true});
  }
  logout(){
    return axios.post(Base_URL + "/candidate/logout");
  }
}

export default new LoginService();