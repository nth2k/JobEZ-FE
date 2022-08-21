import axios from "axios";

const Base_URL = "http://localhost:8081";

class VietNameAddressService{
    getAllProvince(){
        return axios.get(Base_URL + "/vietnam/province");
    }
    getAllDistrict(provinceId){
        return axios.get(Base_URL + "/vietnam/province/district/" + provinceId);
    }
}
export default new VietNameAddressService();