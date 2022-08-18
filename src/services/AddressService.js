import axios from "axios";

// const Base_URL = "https://vapi.vnappmob.com";

const Base_URL = "http://localhost:8081/vietnam";

const AddressService = {
    getProvince() {
        return axios.get(Base_URL + "/province");
    },
    getDistrict(provinceId) {
        return axios.get(Base_URL + "/province/district/" + provinceId)
    }
}

export default AddressService;
