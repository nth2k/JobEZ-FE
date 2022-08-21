<template>
  <div>
    <HeaderComponent />
    <div class="search-container">
      <div class="search-form">
        <input
          type="text"
          v-model="searchText"
          placeholder="Nhập công việc, vị trí"
        />
        <select name="province" id="">
          <option value="">---Chọn tỉnh thành---</option>
        </select>
        <button @click="submit">Tìm kiếm</button>
      </div>
      <div class="text-center mt-5 mb-5">
        <span style="color: white">Cần thêm nhiều tùy chọn tìm kiếm? </span>
        <span style="color: yellow">Tìm kiếm nâng cao</span>
      </div>
    </div>
    <div class="row m-5">
      <div class="candidate-container w-75 mt-5">
        <h5 style="color: #4c5bd4">
          Người tìm việc mới nhất - Xem Hồ sơ, CV ứng viên miễn phí
        </h5>
        <hr />
        <div class="candidate-detail">
          <div
            v-for="(candidate, index) in listSearchCandidate"
            :key="index"
            class="candidate row p-3 m-3"
          >
            <div class="logo">
              <img
                style="width: 170px; height: 120px"
                :src="candidate.images"
                alt=""
              />
            </div>
            <div class="pl-4">
              <span style="color: #4c5bd4; font-weight: bold; cursor: pointer" @click="candidateProfile(candidate.id)">{{
                candidate.name
              }}</span
              ><br />
              <span style="color: #f2994a"
                >Học tại: {{ candidate.university }}</span
              ><br />
              <span>Học lực: {{ candidate.rating }}</span>
              <br />
              <span>Giớitính: {{ candidate.gender }}</span
              ><br />
              <span>Mong muốn nghề nghiệp: {{ candidate.careerGoals }}</span
              ><br />
            </div>
          </div>
        </div>

        <div class="page">
          <ul class="pagination">
            <li @click="paging(0)" class="page-item">
              <a class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li
              v-for="i in totalPage"
              :key="i"
              class="page-item"
              @click="paging(i)"
            >
              <a class="page-link"> {{ i }}</a>
            </li>
            <li class="page-item">
              <a class="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="chat-candidate w-25 mt-5 p-3">
        <h5 class="text-center" style="color: #4c5bd4">ỨNG VIÊN TIỀM NĂNG</h5>
        <hr />
        <div class="chat-info row">
          <div class="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt=""
              style="width: 60px; height: 60px"
            />
          </div>
          <div class="ml-3">
            <span>TRẦN THỊ XUÂN ÁNH</span><br />
            <span>Nhân viên pha chế mỹ phẩm</span>
          </div>
        </div>
        <hr />
        <div class="chat-info row">
          <div class="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt=""
              style="width: 60px; height: 60px"
            />
          </div>
          <div class="ml-3">
            <span>TRẦN THỊ XUÂN ÁNH</span><br />
            <span>Nhân viên pha chế mỹ phẩm</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import SearchCandidateService from "@/services/SearchCandidateService.js";
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
export default {
  name: "SearchCandidate",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      searchText: "",
      pageOffset: 0,
      listSearchCandidate: [],
      totalPage: 0,
      selectedPage: 1,
    };
  },
  methods: {
    candidateProfile(candidateId){
      console.log(candidateId);
      this.$router.push({
        name: "CandidateProfile",
        params: { candidateId: candidateId },
      })
    },
    submit() {
      SearchCandidateService.getCandidateByTextField(
        this.searchText,
        this.pageOffset
      ).then((rs) => {
        this.listSearchCandidate = rs.data.content;
        if (rs.data.total % 4 == 0) {
          this.totalPage = rs.data.total % 4;
        } else if (rs.data.total % 4 != 0) {
          this.totalPage = (rs.data.total % 4) + 1;
        } else if (rs.data.total / 4 < 1) {
          this.totalPage = 1;
        }
        console.log(rs);
        console.log(this.totalPage);
      });
    },
    paging(selectedPage) {
      SearchCandidateService.getCandidateByTextField(
        this.searchText,
        selectedPage
      ).then((rs) => {
        this.listSearchCandidate = rs.data.content;
      });
    },
  },
};
</script>

<style scoped>
.search-container {
  background-image: url("@/assets/landingPage.png");
  width: 100%;
  height: 286px;
  padding-top: 70px;
}

.search-form {
  width: 80%;
  text-align: center;
  margin: 0 auto;
}

.search-form input {
  width: 600px;
  height: 65px;
  border-radius: 50px 2px 2px 50px;
  padding-left: 40px;
  background-color: white;
  border: 2px solid black;
}

.search-form select {
  width: 356px;
  height: 65px;
  padding-left: 40px;
  background-color: white;
  border: 2px solid black;
}

.search-form button {
  width: 120px;
  height: 62px;
  background-color: #fff600;
  border-radius: 2px 50px 50px 2px;
}

.candidate {
  border: 2px dashed rgb(142, 154, 165);
}

.page {
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;
}

.chat-candidate {
  border: 1px solid #4c5bd4;
}
</style>