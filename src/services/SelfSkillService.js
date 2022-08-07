import axios from "axios";

const Base_URL = "http://localhost:8081";

class SelfSkillService{
    getSelfSkill(id){
        return axios.get(Base_URL + "/selfskill/" + id)
    }
    updateSelfSkill(SelfSkill){
        return axios.post(Base_URL + "/selfskill/update", SelfSkill)
    }
}
export default new SelfSkillService();