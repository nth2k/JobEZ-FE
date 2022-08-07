import axios from "axios";

const Base_URL = "http://localhost:8081";

class CareerGoalService{
    getCareerGoal(id){
        return axios.get(Base_URL + "/careergoal/" + id)
    }
    updateCareerGoal(CareerGoal){
        return axios.post(Base_URL + "/careergoal/update", CareerGoal)
    }
}
export default new CareerGoalService();