import axios from "axios";

const Base_URL = "http://localhost:8080";

class LanguageCertificateService{
    getLanguage(){
        return axios.get(Base_URL + "/language/1");
    }
    findLanguage(id){
        return axios.get(Base_URL + "/language/editlanguage/" + id);
    }
    addLanguage(language){
        return axios.post(Base_URL + "/language/add", language);
    }
    updateLanguage(id, language){
        return axios.post(Base_URL+ "/language/update/" + id, language);
    }
    deleteLanguage(id){
        return axios.delete(Base_URL + "/language/delete/" + id);
    }
}

export default new LanguageCertificateService();