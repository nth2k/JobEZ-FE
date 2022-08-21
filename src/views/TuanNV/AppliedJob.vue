<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="table-job">
        <div><span>// Việc làm đã ứng tuyển</span></div>
        <div>
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Công việc</th>
                <th>Vị trí công việc</th>
                <th>Hạn nộp</th>
                <th>Ngày nộp</th>
                <th>Nhận xét từ NTD</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <div v-if="!isListAppliedJob" class="text-center">
                Bạn chưa ứng tuyển công việc nào
              </div>
              <tr
                v-for="(appliedjob, index) in listAppliedJob"
                v-bind:key="appliedjob.id"
              >
                <td class="column">
                  <span>{{ index + 1 }}</span>
                </td>
                <td>
                  <div>{{ appliedjob.positionJobname }}</div>

                  <div>
                    <a @click="showPosting(appliedjob.postingId)"
                      >(Xem chi tiết)</a
                    >
                  </div>
                </td>
                <td class="column">
                  <span>{{ appliedjob.postingPosition }}</span>
                </td>

                <td>
                  <div>{{ appliedjob.deadlineForSubmission }}</div>
                  <div>
                    <span>{{
                      countDaysDeadlineForSubmission(
                        appliedjob.deadlineForSubmission
                      )
                    }}</span>
                  </div>
                </td>
                <td class="column">
                  <div>{{ formatDate(appliedjob.dateSubmission) }}</div>

                  <div>
                    <!-- <span>{{
                      countDaysDateSubmission(appliedjob.dateSubmission)
                    }}</span> -->
                  </div>
                </td>
                <td>
                  <span>{{ appliedjob.commentFromEmployer }}</span>
                </td>
                <td>
                  <DeleteAppliedJobModal
                    :postingId="appliedjob.postingId"
                    :userId="appliedjob.userId"
                    :recruiterId="appliedjob.recruiterId"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="update">
          <span
            >Hãy cập nhật thông tin về người tham chiếu hồ sơ của bạn để tăng chất lượng
            hồ sơ và thu hút nhà tuyển dụng
            <a href="#" class="text-danger">Cập nhật ngay</a></span
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import AppliedJobService from "@/services/AppliedJobService.js";
import DeleteAppliedJobModal from "./modal/DeleteAppliedJobModal.vue";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "AppliedJob",
  components: {
    Header,
    DeleteAppliedJobModal,
    Navigator,
  },
  data() {
    return {
      userId: "",
      listAppliedJob: [],
      isListAppliedJob: false,
    };
  },
  methods: {
    getAppliedJobs() {
      AppliedJobService.getAppliedJobs(this.userId).then((res) => {
        this.listAppliedJob = res.data;
        if (res.data) {
          this.isListAppliedJob = true;
        } else {
          this.isListAppliedJob = false;
        }
      });
    },
    countDaysDeadlineForSubmission(date) {
      var datesplit = date.split("/");
      var date1 = new Date(
        datesplit[1] + "/" + datesplit[0] + "/" + datesplit[2]
      );
      var date2 = new Date();
      var duration = Math.ceil(
        (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000)
      );
      return duration < 0
        ? "(" + Math.abs(duration) + " ngày trước)"
        : "(Còn " + duration + " ngày)";
    },
    countDaysDateSubmission(date) {
      var date1 = new Date(date);
      var date2 = new Date();
      var duration = Math.ceil(
        (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000)
      );
      return duration < 0
        ? "(" + Math.abs(duration) + " ngày trước)"
        : "(Còn " + duration + " ngày)";
    },
    formatDate(date) {
      var d = new Date(date);
      return d
        .toLocaleDateString("en-GB", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })
        .replace(/ /g, "/");
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
    this.getAppliedJobs();
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
