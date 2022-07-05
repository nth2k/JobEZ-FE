import axios from "axios";

const Base_URL = "http://localhost:8080";

class LanguageCertificateService{
    getLanguage(){
        return axios.get(Base_URL + "/language/user/1");
    }
    findLanguage(id){
        return axios.get(Base_URL + "/language/editlanguage/" + id);
    }
    addLanguage(language){
        return axios.post(Base_URL + "/language/add", language);
    }
    updateLanguage(language, id){
        return axios.post(Base_URL+ "/update/" + id, language);
    }
    deleteLanguage(id){
        return axios.delete(Base_URL + "/delete/" + id);
    }
}

export default new LanguageCertificateService();