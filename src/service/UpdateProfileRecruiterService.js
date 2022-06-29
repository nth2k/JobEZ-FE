import axios from "axios";

const Base_URL = "http://localhost:8081";

class PostNewService{
    getPostNewPage(){
        return axios.get(Base_URL + "/update/");
    }
    addPost(post){
        return axios.post(Base_URL + "/update1/", post);
    }
}

export default new PostNewService();