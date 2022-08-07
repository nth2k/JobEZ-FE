<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
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
                <th>Công ty</th>
                <th>Vị trí công việc</th>
                <th>Hạn nộp</th>
                <th>Ngày nộp</th>
                <th>Nhận xét từ NTD</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <div v-if="!listAppliedJob.length" class="text-center">Bạn chưa ứng tuyển công việc nào</div>
              <tr v-for="(appliedjob, index) in listAppliedJob" v-bind:key="appliedjob.id">
                <td class="column"><span>{{ index + 1 }}</span></td>
                <td>
                  <div>{{ appliedjob.positionJobname }}</div>

                  <div><a href="#">(Xem chi tiết)</a></div>
                </td>
                <td class="column"><span>{{ appliedjob.postingPosition }}</span></td>

                <td>
                  <div>{{ appliedjob.deadlineForSubmission }}</div>
                  <div><span>{{ countDaysDeadlineForSubmission(appliedjob.deadlineForSubmission) }}</span></div>
                </td>
                <td class="column">
                  <div>{{ formatDate(appliedjob.dateSubmission) }}</div>

                  <div><span>{{ countDaysDateSubmission(appliedjob.dateSubmission) }}</span></div>
                </td>
                <td><span>{{ appliedjob.commentFromEmployer }}</span></td>
                <td>
                <button class="btn btn-danger btnDelete" @click="deleteAppliedJob(appliedjob.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
                    viewBox="0 0 16 16">
                  </svg>
                  Xóa
                </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="update">
          <span>Hãy cập nhật thông tin về người tham chiếu hồ sơ của bạn để tăng
            chất lượng hồ sơ và thu hút nhà tuyển dụng
            <a href="#" class="text-danger">Cập nhật ngay</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import AppliedJobService from '@/services/AppliedJobService.js'
export default {
  name: "AppliedJob",
  components: {
    SlideBar_candidate,
    Header,
  },
  data() {
    return {
      userId: 1,
      listAppliedJob: [],
    };
  },
  methods: {
    getAppliedJobs(userId) {
      AppliedJobService.getAppliedJobs(userId).then((res) => {
        this.listAppliedJob = res.data;
      })
    },
    deleteAppliedJob(appliedjobId) {
      let textConfirm = "Press Ok to delete your applied job.";
      if (confirm(textConfirm) == true) {
        AppliedJobService.deleteAppliedJob(appliedjobId);
        location.reload();
        alert('Xóa thành công');
      }
    },
    countDaysDeadlineForSubmission(date) {
      var datesplit = date.split("/");
      var date1 = new Date(datesplit[1] + "/" + datesplit[0] + "/" + datesplit[2]);
      var date2 = new Date();
      var duration = Math.ceil((date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000));
      return (duration) < 0 ? "(" + Math.abs(duration) + " ngày trước)" : "(Còn " + duration + " ngày)";
    },
    countDaysDateSubmission(date) {
      var year = Number(date.substring(0, 4));
      var month = Number(date.substring(5, 7));
      var day = Number(date.substring(8, 10));
      var dateformat = month + "/" + day + "/" + year;
      var date1 = new Date(dateformat);
      var date2 = new Date();
      var duration = Math.ceil((date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000));
      return (duration) < 0 ? "(" + Math.abs(duration) + " ngày trước)" : "(Còn " + duration + " ngày)";
    },
    formatDate(date) {
      var d = new Date(date);
      return d.toLocaleDateString();
    }
  },
  created() {
    this.getAppliedJobs(this.userId);
  }
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
