import axios from "axios";

const Base_URL = "http://localhost:8081";

class ProvinceDistrictService{
    getAllProvince(){
        return axios.get(Base_URL + "/provincedistrict/province");
    }
    getAllDistrict(){
        return axios.get(Base_URL + "/provincedistrict/district/1");
    }
}
export default new ProvinceDistrictService();