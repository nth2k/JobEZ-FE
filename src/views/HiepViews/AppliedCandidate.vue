<template>
  <div class="d-flex">
    <RecruiterNavigator class="w-25" />
    <div class="w-75">
      <Header />
      <div class="mt-5 p-5">
        <h3
          style="
            color: #4c5bd4;
            border-left: 7px solid #4c5bd4;
            padding-left: 10px;
          "
        >
          Hồ sơ đã ứng tuyển
        </h3>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Tên ứng viên</th>
              <th scope="col">Vị trí</th>
              <th scope="col">Ngày nộp</th>
              <th scope="col">Kết quả</th>
              <th scope="col">Cập nhật kết quả</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(candidate, index) in listCandidate" :key="index">
              <td>{{ candidate.candidateName }}</td>
              <td>{{ candidate.postingPosition }}</td>
              <td>{{ candidate.appliedDate }}</td>
              <td>
                <v-select
                  class="w-75"
                  :items="items"
                  label="Trạng thái"
                  outlined
                  @change="
                    (e) => {
                      this.status = e;
                    }
                  "
                ></v-select>
              </td>
              <td><button class="btn btn-primary" @click="updateStatus">Cập nhật</button></td>
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
  name: "AppliedCandidate",
  components: { Header, RecruiterNavigator },
  data: () => ({
    items: ["Đến phỏng vấn", "Hồ sơ đạt yêu cầu", "Không đạt yêu cầu"],
    listCandidate: [],
    isListCandidate: false,
    status: "",
  }),
  methods: {
    updateStatus(){
      console.log(this.status);
    }
  },
  created() {
    const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
    RecruiterManagementService.getAppliedCandidate({
      user_id: theLoggedUser.user.id,
    }).then((rs) => {
      this.listCandidate = rs.data;
    });
  },
};
</script>

<style scoped>
</style>