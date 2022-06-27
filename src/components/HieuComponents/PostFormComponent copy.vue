<template>
  <div class="container-fluid b bg-white">
    <br />
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form action="#">
          <div class="a">
            <span class="a"><b>&nbsp;&nbsp;Thông tin đăng tuyển</b></span>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Vị trí đăng tuyển</b><span class="required"> *</span></label
            >
            <input
              type="text"
              class="form-control"
              v-model="positonValue"
              placeholder="VD: Nhân viên kinh doanh, nhân viên hành chính"
            />
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Cấp bậc</b><span class="required"> *</span></label
            >
            <multiselect
              v-model="rankValue"
              track-by="id"
              label="name"
              placeholder="Vui lòng chọn"
              :options="listData.ranks"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Địa điểm làm việc</b><span class="required"> *</span></label
            >
            <multiselect
              v-model="provinceWorkValue"
              placeholder="Chọn tối đa 5 tỉnh thành"
              label="name"
              track-by="name"
              :options="listData.provinces"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            ></multiselect>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Hình thức làm việc</b><span class="required"> *</span></label
            >
            <multiselect
              v-model="workingFormValue"
              track-by="id"
              label="name"
              placeholder="Chọn hình thức"
              :options="listData.workingForms"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Mức lương</b><span class="required"> *</span></label
            >
            <multiselect
              v-model="salaryValue"
              track-by="id"
              label="name"
              placeholder="Chọn mức lương"
              :options="listData.salaries"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
          </div>
          <br />
          <div>
            <label class="typo__label c"><b>Hoa hồng( nếu có )</b></label>
            <input
              type="text"
              class="form-control"
              v-model="commissionValue"
              placeholder="Ví dụ: từ 12% đến 15%"
            />
          </div>
          <br />
          <div>
            <label class="typo__label c"><b>Thời gian thử việc</b></label>
            <input
              type="text"
              class="form-control"
              v-model="probPeriodValue"
              placeholder="Ví dụ: 1 tuần hoặc 1 tháng"
            />
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Số lượng cần tuyển</b><span class="required"> *</span></label
            >
            <input
              type="text"
              class="form-control"
              v-model="quantityRequired"
              placeholder="Số lượng"
            />
          </div>
          <br />
          <div class="a">
            <span class="a"><b>&nbsp;&nbsp;Mô tả công việc</b></span>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Mô tả công việc</b><span class="required"> *</span></label
            >
            <textarea
              type="textarea"
              class="form-control a"
              v-model="jobDescription"
              placeholder="Bạn cần nhập tối thiểu 50 từ
              -Tiêu đề cho vị trí công việc cần tuyển dụng là gì?(Phần này nêu tên chính xác vị trí công việc cần tuyển dụng)
              -Mục tiêu của vị trí công việc: vị trí này tồn tại để làm gì cho công ty?
              -Các nhiệm vụ chính của vị trí công việc là gì?
              -Địa chỉ nơi làm việc
              -Nội dung công việc cần thực hiện: ..."
            ></textarea>
          </div>
          <br />
          <div class="a">
            <span class="a"><b>&nbsp;&nbsp;Yêu cầu công việc</b></span>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Kinh nghiệm</b><span class="required"> *</span></label
            >
            <multiselect
              v-model="yearOfExperienceValue"
              track-by="name"
              label="name"
              placeholder="Chọn kinh nghiệm"
              :options="listData.yearOfExperiences"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Yêu cầu bằng cấp</b><span class="required"> *</span></label
            >
            <multiselect
              v-model="degreeRequiredValue"
              track-by="certificateName"
              label="certificateName"
              placeholder="Chọn bằng cấp"
              :options="listData.degreeRequired"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Yêu cầu giới tính</b><span class="required"> *</span></label
            >
            <multiselect
              v-model="genderValue"
              track-by="gName"
              label="gName"
              placeholder="Chọn giới tính"
              :options="gOptions"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Yêu cầu công việc</b><span class="required"> *</span></label
            >
            <textarea
              type="textarea"
              class="form-control b"
              v-model="jobRequirement"
              placeholder="Bạn cần nhập tối thiểu 50 từ 
              -Trách nhiệm nhân viên cần làm là gì?
              -Nhiệm vụ công việc cần thực hiện hằng ngày là gì?
              -Những kỹ năng nào cần có để thực hiện công việc tốt nhất?
              +Những kỹ năng bắt buộc(Những kỹ năng cần có là gì?)
              +Những kỹ năng mang tính khuyến khích(Ngoài ra ứng viên có thể đáp ứng những kỹ năng nào để phát triển công việc tốt nhất?)
              -Bằng cấp, chứng chỉ phù hợp với công việc
              -Yêu cầu về kinh nghiệm, thái độ, phẩm chất đạo đức
              -Ngoài ra tùy vào đặc thù của công việc có thể yêu cầu thêm"
            ></textarea>
          </div>
          <br />
          <div class="a">
            <span class="a"><b>&nbsp;&nbsp;Quyền lợi được hưởng</b></span>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Quyền lợi được hưởng</b
              ><span class="required"> *</span></label
            >
            <textarea
              type="textarea"
              class="form-control c"
              v-model="jobBenefit"
              placeholder="Bạn cần nhập tối thiểu 50 từ 
              -Chế độ về mức lương, thưởng, chế độ đãi ngộ.
              -Các chế độ đóng bảo hiểm xã hội và phúc lợi khác của nhân viên cụ thể là gì?
              -Môi trường làm việc của công ty hấp dẫn thế nào? Có thể mang đến những cơ hội học tập, huấn luyện cho ứng viên ra sao
              -Cơ hội thăng tiến của ứng viên là như thế nào?"
            ></textarea>
          </div>
          <br />
          <div class="a">
            <span class="a"><b>&nbsp;&nbsp;Yêu cầu hồ sơ</b></span>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Hồ sơ bao gồm</b><span class="required"> *</span></label
            >
            <textarea
              type="textarea"
              class="form-control c"
              v-model="profileRequired"
              placeholder="-Đơn xin việc
              -Sơ yếu lý lịch
              -Hộ khẩu, chứng minh nhân dân và giấy khám sức khỏe
              -Các bằng cấp có liên quan"
            ></textarea>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Hạn nộp hồ sơ</b><span class="required"> *</span></label
            >
          </div>
          <div class="date">
            <multiselect
              v-model="dayValue"
              track-by="dayValue"
              label="dayName"
              placeholder="Ngày"
              :options="dayOptions"
              :searchable="false"
              :allow-empty="true"
            ></multiselect
            >&nbsp;&nbsp;&nbsp;&nbsp;
            <multiselect
              v-model="monthValue"
              track-by="monthValue"
              label="monthName"
              placeholder="Tháng"
              :options="monthOptions"
              :searchable="false"
              :allow-empty="true"
            ></multiselect
            >&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              class="form-control"
              v-model="yearValue"
              placeholder="Năm"
            />
          </div>
          <br />
          <div class="a">
            <span class="a"><b>&nbsp;&nbsp;Thông tin liên hệ</b></span>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Tên người liên hệ</b><span class="required"> *</span></label
            >
            <input
              type="text"
              class="form-control"
              v-model="recruiterName"
              placeholder="Tên người liên hệ"
            />
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Địa chỉ liên hệ</b><span class="required"> *</span></label
            >
            <div class="address">
              <input
                type="text"
                class="form-control"
                v-model="addressValue"
                placeholder="Địa chỉ"
              />&nbsp;&nbsp;&nbsp;&nbsp;
              <multiselect
                v-model="streetValue"
                track-by="id"
                label="name"
                placeholder="Đường"
                :options="listData.streets"
                :searchable="false"
                :allow-empty="true"
              ></multiselect
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <multiselect
                v-model="provinceValue"
                track-by="id"
                label="name"
                placeholder="Tỉnh"
                :options="listData.provinces"
                :searchable="false"
                :allow-empty="true"
              ></multiselect
              >&nbsp;&nbsp;&nbsp;&nbsp;
              <multiselect
                v-model="cityValue"
                track-by="id"
                label="name"
                placeholder="Thành Phố"
                :options="listData.cities"
                :searchable="false"
                :allow-empty="true"
              ></multiselect>
            </div>
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Số điện thoại liên hệ</b
              ><span class="required"> *</span></label
            >
            <input
              type="text"
              class="form-control"
              v-modle="recruiterPhonenumber"
              placeholder="Số điện thoại liên hệ"
            />
          </div>
          <br />
          <div>
            <label class="typo__label c"
              ><b>Email liên hệ</b><span class="required"> *</span></label
            >
            <input
              type="text"
              class="form-control"
              v-model="recruiterEmail"
              placeholder="Email liên hệ"
            />
          </div>
          <br /><br /><br />
          <div class="button">
            <button v-on:click="addPost()" class="postbtn">Đăng tin</button>
            <button class="cancelbtn">Hủy đăng tin</button>
          </div>
          <br /><br /><br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import PostNewService from "@/service/PostNewService.js";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      listData: null,
      positonValue: null,
      rankValue: null,
      jobRequirement: null,
      provinceWorkValue: null,
      provinceValue: null,
      commissionValue: null,
      workingFormValue: null,
      recruiterEmail: null,
      recruiterPhonenumber: null,
      recruiterName: null,
      profileRequired: null,
      probPeriodValue: null,
      salaryValue: null,
      quantityRequired: null,
      yearOfExperienceValue: null,
      degreeRequiredValue: null,
      jobBenefit: null,
      dayValue: null,
      monthValue: null,
      yearValue: null,
      jobDescription: null,
      addressValue: null,
      streetValue: null,
      cityValue: null,
      genderValue: null,
      gOptions: [
        { gName: "Nam" },
        { gName: "Nữ" },
        { gName: "Không quan trọng" },
      ],
      dayOptions: [
        { dayName: "Ngày 01", dayValue: "01" },
        { dayName: "Ngày 02", dayValue: "02" },
        { dayName: "Ngày 03", dayValue: "03" },
        { dayName: "Ngày 04", dayValue: "04" },
        { dayName: "Ngày 05", dayValue: "05" },
        { dayName: "Ngày 06", dayValue: "06" },
        { dayName: "Ngày 07", dayValue: "07" },
        { dayName: "Ngày 08", dayValue: "08" },
        { dayName: "Ngày 09", dayValue: "09" },
        { dayName: "Ngày 10", dayValue: "10" },
        { dayName: "Ngày 11", dayValue: "11" },
        { dayName: "Ngày 12", dayValue: "12" },
        { dayName: "Ngày 13", dayValue: "13" },
        { dayName: "Ngày 14", dayValue: "14" },
        { dayName: "Ngày 15", dayValue: "15" },
        { dayName: "Ngày 16", dayValue: "16" },
        { dayName: "Ngày 17", dayValue: "17" },
        { dayName: "Ngày 18", dayValue: "18" },
        { dayName: "Ngày 19", dayValue: "19" },
        { dayName: "Ngày 20", dayValue: "20" },
        { dayName: "Ngày 21", dayValue: "21" },
        { dayName: "Ngày 22", dayValue: "22" },
        { dayName: "Ngày 23", dayValue: "23" },
        { dayName: "Ngày 24", dayValue: "24" },
        { dayName: "Ngày 25", dayValue: "25" },
        { dayName: "Ngày 26", dayValue: "26" },
        { dayName: "Ngày 27", dayValue: "27" },
        { dayName: "Ngày 28", dayValue: "28" },
        { dayName: "Ngày 29", dayValue: "29" },
        { dayName: "Ngày 30", dayValue: "30" },
        { dayName: "Ngày 31", dayValue: "31" },
      ],
      monthOptions: [
        { monthName: "Tháng 1", monthValue: "01" },
        { monthName: "Tháng 2", monthValue: "02" },
        { monthName: "Tháng 3", monthValue: "03" },
        { monthName: "Tháng 4", monthValue: "04" },
        { monthName: "Tháng 5", monthValue: "05" },
        { monthName: "Tháng 6", monthValue: "06" },
        { monthName: "Tháng 7", monthValue: "07" },
        { monthName: "Tháng 8", monthValue: "08" },
        { monthName: "Tháng 9", monthValue: "09" },
        { monthName: "Tháng 10", monthValue: "10" },
        { monthName: "Tháng 11", monthValue: "11" },
        { monthName: "Tháng 12", monthValue: "12" },
      ],
    };
  },
  methods: {
    async getData() {
      await PostNewService.getPostNewPage().then((res) => {
        this.listData = res.data;
        console.log(res.data);
      });
    },
    async addPost() {
      let post = {
        position: this.positonValue,
        rank_id: this.rankValue,
        commission: this.commissionValue,
        benefits: this.jobBenefit,
        deadline_for_submission: this.dayValue + "-" + this.monthValue + "-" + this.yearValue,
        degree_required: this.degreeRequiredValue,
        description: this.jobDescription,
        gender_requirement: this.genderValue,
        job_requirement: this.jobRequirement,
        phone_number: this.recruiterPhonenumber,
        probationary_period: this.probPeriodValue,
        profile_included: this.profileRequired,
        quantity_needed: this.quantityRequired,
        recruiter_name: this.recruiterName,
        working_form_id: this.workingFormValue,
        salary_id: this.salaryValue,
        email_contact: this.recruiterEmail,
      };
      await PostNewService.addPost(post).then(() => {});
      console.log(post);
    },
  },
  created() {
    this.getData();
  },
  addTag(newTag) {
    const tag = {
      name: newTag,
      code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
    };
    this.options.push(tag);
    this.value.push(tag);
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
div.a {
  border-left: 7px solid blue;
  font-size: large;
}
.c {
  border-left: 7px solid white;
  font-size: large;
}
span.a {
  color: blue;
}
.b {
  box-shadow: 4px 1px 20px rgba(67, 56, 56, 0.1);
  border-radius: 1rem;
}
.required {
  color: red;
}
.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
textarea.a {
  padding: 60px;
}
textarea.b {
  padding: 80px;
}
textarea.c {
  padding: 40px;
}
.date {
  width: 750px;
  height: 50px;
  display: flex;
  justify-content: center;
}
.address {
  width: 750px;
  height: 50px;
  display: flex;
  justify-content: center;
}
.button {
  width: 750px;
  height: 50px;
  display: flex;
  justify-content: center;
}
.postbtn {
  background-color: blue;
  border: none;
  color: white;
  text-align: center;
  border: 1px solid #c3c3c3;
  padding: 10px 50px;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
}
.cancelbtn {
  background-color: white;
  border: none;
  color: blue;
  text-align: center;
  border: 1px solid #c3c3c3;
  padding: 10px 50px;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
}
</style>
