import axios from "axios";

const Base_URL = "http://localhost:8081";

class PostNewService{
    getPostNewPage(){
        return axios.get(Base_URL + "/postNew/postNew1/");
    }
    addPost(post){
        return axios.post(Base_URL + "/postNew/postNew4/", post);
    }
}

export default new PostNewService();