<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="mx-2 my-2 body mt-3 py-3 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="right col-9">
          <div class="titleheader">Kinh nghiệm làm việc</div>
          <div class="container">
            <form>
              <div class="row block2">
                <div class="col-12">
                  <div class="title">
                    <span>Chức danh vị trí <span class="star">*</span></span>
                    <div class="titleright">
                      <span>(</span><span class="star">*</span
                      ><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <input
                      class="form-control"
                      type="text"
                      id="chucdanh"
                      placeholder="Nhập chức danh"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span
                      >Công ty
                      <span class="star">*</span></span
                    >
                  </div>
                  <div>
                    <input
                      class="form-control"
                      type="text"
                      id="congty"
                      placeholder="Nhập tên công ty"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span
                      >Thời gian (dd/mm/yyy) <span class="star">*</span></span
                    >
                  </div>
                  <div class="d-flex justify-content-between">
                    <div
                      class="col-5"
                      style="padding-left: 0; padding-right: 0"
                    >
                      <input
                        class="form-control"
                        type="text"
                        id="ngaybatdau"
                        placeholder="Ngày bắt đầu"
                      />
                    </div>
                    <div
                      class="col-5"
                      style="padding-left: 0; padding-right: 0"
                    >
                      <input
                        class="form-control"
                        type="text"
                        id="ngayketthuc"
                        placeholder="Ngày kết thúc"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="py-2"
                      >Mô tả công việc <span class="star">*</span></span
                    >
                  </div>
                  <div class="form-group shadow-textarea">
                    <textarea
                      class="form-control z-depth-1"
                      rows="5"
                      placeholder="Mô tả công việc như là nhiệm vụ, trách nhiệm, thành tích đạt được..."
                    ></textarea>
                  </div>
                  <div class="row">
                    <div class="col-12 justify-content-center">
                      <button class="btn btn-primary px-5">Lưu</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";

export default {
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
};
</script>

<style scoped>
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.star {
  color: red;
}
.titleright {
  float: right;
  font-weight: initial;
  font-size: 12px;
  font-style: italic;
}
.right {
  border-left: 1px solid gray;
}
.title {
  margin: 0.5rem 0;
  font-weight: bold;
}
.titleheader {
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 203px;
  color: #2A3563;
  font-size: 20px;
  font-weight: bold;
}
</style>