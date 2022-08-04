import axios from "axios";

const Base_URL = "http://localhost:8080";

class ReferencePersonService{
    getReferencePerson(){
        return axios.get(Base_URL + "/refperson/1");
    }
    deleteReferencePerson(id){
        return axios.delete(Base_URL + "/refperson/delete/" + id)
    }
}

export default new ReferencePersonService();