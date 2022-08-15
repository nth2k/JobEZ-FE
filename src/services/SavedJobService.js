import axios from "axios";

const Base_URL = "http://localhost:8081";

class SavedJobService {
  getSavedJobs(id) {
    return axios.get(Base_URL + "/savedjob/" + id);
  }
  deleteSavedJob(savedjobkey) {
    return axios.post(Base_URL + "/savedjob/remove", savedjobkey);
  }
  async addSavedJob(commit, email, postingId) {
    const body = {
      email: email,
      posting_id: postingId,
    };
    await axios.post(Base_URL + "/savedjob/add", body).then((response) => {
      commit("SET_SAVED_JOB", response.data);
    });
  }
}

export default new SavedJobService();
