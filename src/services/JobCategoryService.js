import axios from "axios";

const Base_URL = "http://localhost:8080";

class JobCategory {
  async getPostingByCategory(commit, categoryId, pageOffSet) {
    const body = {
      page_off_set: pageOffSet,
      posting_category_id: categoryId,
    };
    await axios
      .post(Base_URL + "/posting/category/" + categoryId, body)
      .then((response) => {
        commit("SET_POSTING", response.data);
      });
  }

  async getPostingByProvince(commit, provinceId, pageOffSet) {
    const body = {
      page_off_set: pageOffSet,
      province_id: provinceId,
    };
    axios
      .post(Base_URL + "/posting/province/" + provinceId, body)
      .then((response) => {
        commit("SET_POSTING", response.data);
      });
  }

  async getPostingByCity(commit, cityId, pageOffSet) {
    const body = {
      page_off_set: pageOffSet,
      city_id: cityId,
    };
    axios.post(Base_URL + "/posting/city/" + cityId, body).then((response) => {
      commit("SET_POSTING", response.data);
    });
  }
}

export default new JobCategory();
