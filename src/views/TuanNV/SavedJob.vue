<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
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
                <th>Công ty</th>
                <th>Vị trí công việc</th>
                <th>Hạn nộp</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <div v-if="!listSavedJob.length" class="pt-5">
                Bạn chưa lưu công việc nào
              </div>
              <tr v-for="(savedJob, index) in listSavedJob" v-bind:key="savedJob.id">
                <td class="column">
                  <span>{{ index + 1 }}</span>
                </td>

                <td>
                  <div>{{ savedJob.postingJobname }}</div>

                  <div><a href="#">(Xem chi tiết)</a></div>
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
                  <button
                    class="btn btn-danger btnDelete"
                    @click="deleteSavedJob(savedJob.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="update">
          <span
            >Hãy cập nhật thông tin về người tham chiếu hồ sơ của bạn để tăng chất lượng
            hồ sơ và thu hút nhà tuyển dụng
            <a href="#" class="text-danger">Cập nhật ngay</a></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import SavedJobService from "@/services/SavedJobService.js";
// import Header from "./components/views/Header.vue";
// import SlideBar_candidate from "./components/ProfileCandidate/slideBar_candidate.vue";
export default {
  name: "SavedJob",
  components: {
    SlideBar_candidate,
    Header,
  },
  data() {
    return {
      userId: 1,
      listSavedJob: [],
    };
  },
  methods: {
    getSavedJobs(userId) {
      SavedJobService.getSavedJobs(userId).then((res) => {
        this.listSavedJob = res.data;
      });
    },
    deleteSavedJob(savedJobId) {
      let textConfirm = "Press Ok to delete your saved job.";
      if (confirm(textConfirm) == true) {
        SavedJobService.deleteSavedJob(savedJobId)
          .then(() => {
            this.$store.dispatch("setSnackbar", {
              text: "Xóa thành công",
            });
            this.$router.push("/savedjobs");
          })
          .catch(() => {
            this.$store.dispatch("setSnackbar", {
              color: "error",
              text: "Có lỗi xảy ra! Vui lòng thử lại",
            });
          });
      }
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
  },
  created() {
    this.getSavedJobs(this.userId);
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
