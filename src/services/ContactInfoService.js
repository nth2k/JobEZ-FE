import axios from "axios";

const Base_URL = "http://localhost:8081";

class ContactInfoService{
    getContactInfo(userId){
        return axios.get(Base_URL + "/contactinfo/" + userId);
    }
    saveContactInfo(contact){
        // console.log(contact);
        return axios.post(Base_URL + "/contactinfo/save" ,contact);
    }
}
export default new ContactInfoService();