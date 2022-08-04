import axios from "axios";

const Base_URL = "https://vapi.vnappmob.com";

const AddressService = {
    getProvince() {
        return axios.get(Base_URL + "/api/province");
    },
    getDistrict(provinceId) {
        return axios.get(Base_URL + "/api/province/district/" + provinceId)
    }
}

export default AddressService;
