<template>
  <div class="d-flex">
    <RecruiterNavigator class="w-25" />
    <div class="w-75">
      <Header />
      <div v-if="isListJob" class="mt-5 p-5">
        <h3
          style="
            color: #4c5bd4;
            border-left: 7px solid #4c5bd4;
            padding-left: 10px;
          "
        >
          Thông số tin tuyển dụng
        </h3>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Vị trí tuyển dụng</th>
              <th scope="col">Thống kê</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hạn nộp</th>
              <th scope="col">Dịch vụ</th>
              <th scope="col">Sửa tin</th>
              <th scope="col">Xóa tin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(job, index) in listJob" :key="job.id">
              <td>{{ ++index }}</td>
              <td>{{ job.position }}</td>
              <td>{{ job.view }} lượt xem</td>
              <td>Tin đã được đăng</td>
              <td>{{ job.deadlineForSubmission }}</td>
              <td>Miễn phí</td>
              <td>
                <button class="btn btn-primary" @click="updatePosting(job.id)">
                  SỬA
                </button>
              </td>
              <td>
                <!-- <button class="btn btn-danger" @click="deletePosting(job.id)">
                  Xóa
                </button> -->
                <ConfirmModal :jobId="job.id" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-if="!isListJob" style="margin: 100px; font-size: 27px">
        Bạn chưa có tin đăng nào
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import RecruiterNavigator from "@/components/HiepComponents/RecruiterNavigator.vue";
import ConfirmModal from "@/components/HiepComponents/ConfirmModal.vue";
import RecruiterManagementService from "@/services/RecruiterManagementService.js";
export default {
  name: "RecruiterPostedPosting",
  components: { Header, RecruiterNavigator, ConfirmModal },
  data() {
    return {
      number: 0,
      listJob: [],
      isListJob: false,
    };
  },
  methods: {
    updatePosting(postingId) {
      this.$router.push({
        name: "RecruiterUpdatePosting",
        params: { id: postingId },
      });
    },
  },
  created() {
    const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
    RecruiterManagementService.getPostedPosting(theLoggedUser.user.id).then(
      (res) => {
        this.listJob = res.data;
        if (res.data) {
          this.isListJob = true;
        } else this.isListJob = false;
      }
    );
  },
};
</script>

<style scoped>
</style>