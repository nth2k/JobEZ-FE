import axios from "axios";

const Base_URL = "http://localhost:8081";

const SearchCandidateService = {
  getCandidateByTextField(searchText, pageOffset) {
    return axios.get(`${Base_URL}/candidate/search/page?text=${searchText}&limit=4&pageOffset=${pageOffset}`);
  },
}

export default SearchCandidateService;
