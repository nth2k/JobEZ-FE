import axios from "axios";

const Base_URL = "http://localhost:8081";

const SearchJobService = {
  getJobByTextField(searchText, pageOffset) {
    return axios.get(`${Base_URL}/posting/searchJob?text=${searchText}&limit=4&pageOffset=${pageOffset}`);
  },
}

export default SearchJobService;
