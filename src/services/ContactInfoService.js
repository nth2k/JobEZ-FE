import axios from "axios";

const Base_URL = "http://localhost:8081";

class ContactInfoService{
    getContactInfo(userId){
        return axios.get(Base_URL + "/contactinfo/" + userId);
    }
}
export default new ContactInfoService();