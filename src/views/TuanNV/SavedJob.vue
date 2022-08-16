<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="table-job">
        <div><span>// Việc làm đã lưu</span></div>
        <div>
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Công việc</th>
                <th>Vị trí công việc</th>
                <th>Hạn nộp</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <div v-if="!isSavedJobList" class="pt-5">Bạn chưa lưu công việc nào</div>
              <tr v-for="(savedJob, index) in listSavedJob" v-bind:key="index">
                <td class="column">
                  <span>{{ index + 1 }}</span>
                </td>
                <td>
                  <div>{{ savedJob.postingJobname }}</div>

                  <div>
                    <a @click="showPosting(savedJob.postingId)">(Xem chi tiết)</a>
                  </div>
                </td>
                <td class="column">
                  <span>{{ savedJob.postingPosition }}</span>
                </td>
                <td>
                  <div>{{ savedJob.deadlineForSubmission }}</div>
                  <div>
                    <span>{{ countDays(savedJob.deadlineForSubmission) }}</span>
                  </div>
                </td>
                <td class="column">
                  <DeleteSavedJobModal
                    :postingId="savedJob.postingId"
                    :userId="savedJob.userId"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import SavedJobService from "@/services/SavedJobService.js";
import DeleteSavedJobModal from "./modal/DeleteSavedJobModal.vue";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "SavedJob",
  components: {
    Header,
    DeleteSavedJobModal,
    Navigator,
  },
  data() {
    return {
      userId: "",
      listSavedJob: [],
      isSavedJobList: false,
    };
  },
  methods: {
    getSavedJobs() {
      SavedJobService.getSavedJobs(this.userId).then((res) => {
        this.listSavedJob = res.data;
        if (res.data) {
          this.isSavedJobList = true;
        } else {
          this.isSavedJobList = false;
        }
      });
    },

    countDays(date) {
      var datesplit = date.split("/");
      var date1 = new Date(datesplit[1] + "/" + datesplit[0] + "/" + datesplit[2]);
      var date2 = new Date();
      var duration = Math.ceil(
        (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000)
      );
      return duration < 0
        ? "(" + Math.abs(duration) + " ngày trước)"
        : "(Còn " + duration + " ngày)";
    },
    showPosting(postingId) {
      this.$router.push({
        name: "JobDetailsNoLogin",
        params: { postingId: postingId },
      });
    },
  },
  created() {
    const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
    this.userId = theLoggedUser.user.id;
    this.getSavedJobs();
  },
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: center;
}

thead {
  background-color: #4c5bd4;
}

th {
  color: white;
  padding: 5px 20px;
}

td {
  border: 1px solid lightgray;
  border-left: none;
  border-right: none;
}

a {
  text-decoration: none;
}

.btnDelete {
  border-radius: 50px;
}

.column {
  background-color: #f5f7f7;
  padding: 5px 20px;
}

.table-job {
  margin: 20px;
}

.update {
  background-color: #ededfdcc;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.update span {
  padding: 10px 20px 10px 17px;
}
</style>
