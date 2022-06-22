import axios from "axios";

const Base_URL = "http://localhost:8080";

class LanguageCertificateService{
    getLanguage(){
        return axios.get(Base_URL + "/language/");
    }
}

export default new LanguageCertificateService();