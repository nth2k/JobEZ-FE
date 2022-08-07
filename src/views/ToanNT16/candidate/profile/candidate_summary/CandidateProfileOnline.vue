<template>
  <div
    v-if="isGetCandidateFunction"
    class="candidate-overview-container overflow-hidden"
    id="overview"
  >
    <div class="candidate-profile-online-title pt-4 pl-4 pr-4">
      <p class="highlight-title m-0">Hồ sơ online</p>
    </div>
    <div class="candidate-profile-online-header pl-5 pt-5 row">
      <div class="col-12 col-sm-3">
        <img src="@/assets/avatar213631.jpg" alt="Hình Ảnh Ứng Viên" />
      </div>
      <div class="col-12 col-sm-8 row">
        <div class="col-12 candidate-name">{{ getCanidate.name }}</div>
        <div class="col-12 candidate-position mb-2">
          {{ getCanidate.desiredJob }}
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-6 col-sm-5 mb-2">
              Ngày tháng năm sinh : {{ getCanidate.dateOfBirth }}
            </div>
            <div class="col-6 col-sm-5 mb-2">
              Số điện thoại : {{ getCanidate.phone }}
            </div>
            <div class="col-6 col-sm-5 mb-2">
              Giới tính : {{ getCanidate.gender }}
            </div>
            <div class="col-6 col-sm-5 mb-2">
              Email : {{ getCanidate.email }}
            </div>
            <div class="col-6 col-sm-5 mb-2">
              Tình trạng kết hôn : {{ getCanidate.mariaStatus }}
            </div>
            <div class="col-6 col-sm-5">
              Đại chỉ : {{ getCanidate.city }}, {{ getCanidate.province }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="candidate-profile-online-body pl-5 pt-5">
      <div class="basic-information">
        <ul>
          <h3 class="title">Thông Tin Cơ Bản</h3>
          <li>
            Chỗ ở hiện tại : {{ getCanidate.city }}, {{ getCanidate.province }}
          </li>
          <li>Nơi làm việc mong muốn : {{ getCanidate.workplaceDesired }}</li>
          <li>
            Ngành nghề : <span>{{ getCanidate.desiredJob }}</span>
          </li>
          <li>Kinh nghiệm làm việc: {{ getCanidate.yearOfExperience }}</li>
          <li>Mức lương mong muốn: {{ getCanidate.salary }}</li>
          <li>Hình thức làm việc: {{ getCanidate.workingForm }}</li>
          <li>Cấp bậc mong muốn: {{ getCanidate.rank }}</li>
        </ul>
      </div>

      <div class="career-goals">
        <ul>
          <h3 class="title">Mục Tiêu Nghề Nghiệp</h3>
          <li>{{ getCanidate.careerGoal }}</li>
        </ul>
      </div>

      <div class="personal-skills">
        <ul>
          <h3 class="title">Kỹ Năng Bản Thân</h3>
          <li>{{ getCanidate.skill }}</li>
        </ul>
      </div>

      <div class="experiences">
        <ul>
          <h4 class="title">Kinh Nghiệm Bản Thân</h4>
          <div
            v-for="(item, index) in getCanidate.workExperiences"
            :key="index"
            class="row"
          >
            <p class="title border-0 col-5">{{ item.position }}</p>
            <p class="col-6 title border-0 text-right pr-5">
              {{ item.startDate }} - {{ item.endDate }}
            </p>
            <p>{{ item.companyName }}</p>
            <li>{{ item.description }}</li>
          </div>
        </ul>
      </div>

      <div class="degrees">
        <h3 class="title">Bằng Cấp Chứng Chỉ</h3>
        <div v-for="(item, index) in getCanidate.degrees" :key="index">
          <ul>
            <li class="title border-0">{{ item.name }}</li>
            <li>
              Được cấp bởi : <strong>{{ item.teachingUnit }}</strong>
            </li>
          </ul>
        </div>
      </div>

      <div class="language-informatics">
        <ul>
          <h3 class="title">Ngoại Ngữ Tin Học</h3>
          <li>Tin học văn phòng: Excel, word, powerpoint</li>
          <li>Toeic 650</li>
        </ul>
      </div>
      <!-- <div class="text-center">
        <button class="download-profile mr-3" type="button">Tải hồ sơ</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CandidateProfileOnline",
  computed: {
    ...mapGetters(["getCanidate", "isGetCandidateFunction"]),
  },
};
</script>

<style scoped>
* {
  background-clip: border-box;
  font-family: "Open Sans";
  font-style: normal;
}

.candidate-overview-container {
  box-shadow: 0px 0px 19px rgba(51, 51, 51, 0.25);
  border-radius: 5px;
  background-clip: content-box;
  box-sizing: content-box;
}

.candidate-profile-online-header {
  margin: 0;
  padding-bottom: 2rem;
  border-bottom: 1rem solid #deb887;
}

.candidate-profile-online-title {
  color: #4c5bd4;
  font-weight: 400;

  border-bottom: 2px solid gray;
}

.candidate-profile-online-title p {
  width: 14%;
}

p.highlight-title {
  margin-top: 5px;
  border-bottom: 2px solid #4c5bd4;
}

.candidate-profile-online-header {
  background: #faebd7;
}

.candidate-name {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #deb887;
}

.candidate-position {
  color: #666666;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
}

.title {
  color: #deb887;
  border-bottom: 1px dotted #deb887;
}

.download-profile {
  padding: 0.5rem 2rem;
  color: #4c5bd4;
  border: 1px solid #4c5bd4;
  margin-bottom: 2rem;
}
</style>