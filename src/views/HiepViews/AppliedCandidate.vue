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
        <p v-if="!isListCandidate" style="margin: 100px; font-size: 27px">Bạn không có ứng viên nào ứng tuyển</p>
        <table v-if="isListCandidate" class="table table-striped mt-5">
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
              <td @click="candidateProfile(candidate.candidateId)">{{ candidate.candidateName }}</td>
              <td>{{ candidate.postingPosition }}</td>
              <td>{{ candidate.appliedDate }}</td>
              <td>
                <v-select
                  class="w-75"
                  :items="items"
                  label="Trạng thái"
                  outlined
                  v-model="status"
                ></v-select>
              </td>
              <td>
                <button
                  class="btn btn-primary"
                  @click="
                    updateStatus(candidate.candidateId, candidate.postingId)
                  "
                >
                  Cập nhật
                </button>
              </td>
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
    items: ["Hồ sơ đạt yêu cầu", "Không đạt yêu cầu"],
    listCandidate: [],
    isListCandidate: false,
    status: "Không đạt yêu cầu",
  }),
  methods: {
    updateStatus(candidateId, postingId) {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      RecruiterManagementService.updateCandidateStatus({
        candidate_id: candidateId,
        recruiter_id: theLoggedUser.user.id,
        posting_id: postingId,
        status: this.status,
      })
        .then(() => {
          this.$store.dispatch("setSnackbar", {
            text: "Cập nhật status ứng viên thành công",
          });
          location.reload();
        })
        .catch(() => {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Có lỗi xảy ra! Vui lòng thử lại",
          });
        });
      console.log(candidateId, postingId , theLoggedUser.user.id, this.status);
    },
    candidateProfile(candidateId){
      console.log(candidateId);
      this.$router.push({
        name: "CandidateProfile",
        params: { candidateId: candidateId },
      })
    },
  },
  created() {
    const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
    RecruiterManagementService.getAppliedCandidate({
      user_id: theLoggedUser.user.id,
    }).then((rs) => {
      this.listCandidate = rs.data.filter((e) => {
        return e.commentFromEmployer != "Hồ sơ đạt yêu cầu"
      })
      console.log(this.listCandidate);
      if(this.listCandidate.length > 0){
        this.isListCandidate = true;
      } else this.isListCandidate = false;
    });
  },
};
</script>

<style scoped>
</style>