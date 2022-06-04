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
        <div class="blockright col-9">
          <div class="titleRight">Người tham chiếu</div>

          <div class="container">
            <form>
              <div class="row">
                <div class="col-12">
                  <div class="title">
                    <span>Người tham chiếu <span class="star">*</span></span>
                    <div class="titleBatBuoc">
                      <span>(</span><span class="star">*</span
                      ><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <input
                      class="form-control"
                      type="text"
                      id="tennguoithamchieu"
                      placeholder="Nhập tên người tham chiếu"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Chức danh <span class="star">*</span></span>
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
                    <span>Tên công ty<span class="star">*</span></span>
                  </div>
                  <div>
                    <input
                      class="form-control"
                      type="text"
                      id="tencongty"
                      placeholder="Nhập tên công ty"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Email<span class="star">*</span></span>
                  </div>
                  <div>
                    <input
                      class="form-control"
                      type="email"
                      id="inputemail"
                      placeholder="Nhập Email"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Số điện thoại<span class="star">*</span></span>
                  </div>
                  <div>
                    <input
                      class="form-control"
                      type="text"
                      id="phonenum"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>
                <div class="text-center container">
                  <button
                    class="btn btn-primary btnSave px-5 mt-5"
                    type="submit"
                  >
                    Lưu
                  </button>
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
.star {
  color: red;
}
.titleBatBuoc {
  float: right;
  font-style: italic;
  font-weight: initial;
  font-size: 12px;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.titleRight {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  border-bottom: 1px solid gray;
  width: 138px;
  color: #2a3563;
  font-weight: bold;
}
.blockright {
  border-left: 1px solid gray;
}
.title {
  margin: 5px 0;
  font-weight: 700;
}
.btnSave {
  color: white;
}
</style>