<template>
  <div class="d-flex">
    <RecruiterNavigator class="w-25" />
    <div class="w-75">
      <Header />
      <div class="p-5">
        <h3>// Thống kê tin đăng</h3>
        <div class="d-flex">
          <div class="statistic w-50 p-3">
            <p class="w-50" style="border-bottom: 7px solid #6d92f3">
              Hồ sơ ứng tuyển
            </p>
            <p class="number">{{ numberOfApplieds }}</p>
          </div>
          <div class="statistic w-50 p-3">
            <p class="w-50" style="border-bottom: 7px solid #6d92f3">
              Tin đã đăng
            </p>
            <p class="number">{{ numberOfPostings }}</p>
          </div>
        </div>
        <h3>// Hồ sơ ứng tuyển mới nhất</h3>
        <p
          v-if="!isListCandidate"
          style="margin: 50px; font-size: 27px; font-style: italic"
        >
          Bạn chưa có ứng viên nào ứng tuyển
        </p>
        <table v-if="isListCandidate" class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ứng viên</th>
              <th scope="col">Đại học</th>
              <th scope="col">Ngày nộp</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(candidate, index) in appliedCandidate" :key="index">
              <td>{{ ++index }}</td>
              <td>{{ candidate.candidateName }}</td>
              <td>{{ candidate.university }}</td>
              <td>{{ candidate.dateSubmission }}</td>
            </tr>
          </tbody>
        </table>
        <h3>// Danh sách tin tuyển dụng mới nhất</h3>
        <p
          v-if="!isListPosting"
          style="margin: 50px; font-size: 27px; font-style: italic"
        >
          Bạn chưa có ứng viên nào ứng tuyển
        </p>
        <table v-if="isListPosting" class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Vị trí tuyển dụng</th>
              <th scope="col">Ngày hết hạn</th>
              <th scope="col">Bằng cấp</th>
              <th scope="col">Số lượng cần</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in lastestPostings" :key="index">
              <td>{{ ++index }}</td>
              <td>{{ post.position }}</td>
              <td>{{ post.deadlineForSubmission }}</td>
              <td>{{ post.degreeRequired }}</td>
              <td>{{ post.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import RecruiterNavigator from "@/components/HiepComponents/RecruiterNavigator.vue";
import RecruiterManagementService from "@/services/RecruiterManagementService.js";
export default {
  name: "RecruiterManagement",
  components: { Header, RecruiterNavigator },
  data() {
    return {
      numberOfApplieds: 0,
      numberOfPostings: 0,
      appliedCandidate: [],
      lastestPostings: [],
      isListCandidate: false,
      isListPosting: false,
    };
  },
  created() {
    const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
    RecruiterManagementService.getStatisticById({
      user_id: theLoggedUser.user.id,
    }).then((rs) => {
      (this.numberOfApplieds = rs.data.numberOfApplieds),
        (this.numberOfPostings = rs.data.numberOfPostings),
        (this.appliedCandidate = rs.data.appliedCandidate),
        (this.lastestPostings = rs.data.lastestPostings);

      if (rs.data.appliedCandidate.length > 0) {
        this.isListCandidate = true;
      } else this.isListCandidate = false;

      if (rs.data.lastestPostings.length > 0) {
        this.isListPosting = true;
      } else this.isListPosting = false;
    });
  },
  updated() {
    const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
    RecruiterManagementService.getStatisticById({
      user_id: theLoggedUser.user.id,
    }).then((rs) => {
      (this.numberOfApplieds = rs.data.numberOfApplieds),
        (this.numberOfPostings = rs.data.numberOfPostings),
        (this.appliedCandidate = rs.data.appliedCandidate),
        (this.lastestPostings = rs.data.lastestPostings);

      if (rs.data.appliedCandidate.length > 0) {
        this.isListCandidate = true;
      } else this.isListCandidate = false;

      if (rs.data.lastestPostings.length > 0) {
        this.isListPosting = true;
      } else this.isListPosting = false;
    });
  },
};
</script>

<style scoped>
.statistic {
  height: 150px;
  background-color: #dee2ed;
  margin: 50px;
  border-radius: 20px;
  font-size: 25px;
  display: inline-flex;
}

.number {
  margin-left: 30px;
  color: #5c87f1;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  justify-content: center;
  text-align: center;
  padding: 30px;
  width: 50%;
}
</style>
