import axios from "axios";

const Base_URL = "http://localhost:8081";

class LanguageCertificateService {
    getLanguageCertificate(id) {
        return axios.get(Base_URL + "/language/" + id);
    }
    findLanguageCertificate(id) {
        return axios.get(Base_URL + "/language/editlanguage/" + id);
    }
    addLanguageCertificate(language) {
        return axios.post(Base_URL + "/language/add", language);
    }
    updateLanguageCertificate(language) {
        return axios.post(Base_URL + "/language/update", language);
    }
    deleteLanguageCertificate(id) {
        return axios.delete(Base_URL + "/language/delete/" + id);
    }
    isDuplicate(language) {
        return axios.post(Base_URL + "/language/isDuplicate", language);
    }
}

export default new LanguageCertificateService(); 
