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
        <div class="right  col-9">
          <div class="title titleRight">Công việc mong muốn</div>
          <div>
            <form>
              <div class="container-md">
                <div class="row">
                  <div class="col-5">
                    <label for="inputJob"
                      >Công việc<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control mb-3"
                      id="inputJob"
                      placeholder="Công việc mong muốn"
                    />

                    <label for="place"
                      >Địa Điểm<span class="text-danger">*</span></label
                    >
                    <select name="married" id="place" class="form-control mb-3">
                      <option value="-1">Chọn từ 1 -3 tinh thành</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">TP. Hồ Chí Minh</option>
                    </select>

                    <label for="hinhthuc"
                      >Hình thức<span class="text-danger">*</span></label
                    >
                    <select
                      name="married"
                      id="hinhthuc"
                      class="form-control mb-3"
                    >
                      <option value="-1">Chọn hình thức</option>
                      <option value="1">Online</option>
                      <option value="2">Offline</option>
                    </select>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-5">
                    <label for="capbac"
                      >Cấp bậc mong muốn<span class="text-danger"
                        >*</span
                      ></label
                    >
                    <select
                      name="married"
                      id="capbac"
                      class="form-control mb-3"
                    >
                      <option value="-1">Vui lòng chọn</option>
                      <option value="1">Coder</option>
                      <option value="2">Manager</option>
                    </select>
                    <label for="salary"
                      >Mức lương<span class="text-danger">*</span></label
                    >
                    <select
                      name="married"
                      id="salary"
                      class="form-control mb-3"
                    >
                      <option value="-1">Chọn mức lương</option>
                      <option value="1">10tr</option>
                      <option value="2">20tr</option>
                    </select>
                    <label for="exp"
                      >Kinh nghiệm<span class="text-danger">*</span></label
                    >
                    <select name="married" id="exp" class="form-control mb-3">
                      <option value="-1">Chọn kinh nghiệm</option>
                      <option value="1">1 năm</option>
                      <option value="2">5 năm</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label for="exp"
                      >Ngành nghề<span class="text-danger">*</span></label
                    >
                    <select name="married" id="exp" class="form-control mb-3">
                      <option value="-1">Chọn ngành nghề</option>
                      <option value="1">IT</option>
                      <option value="2">AI</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="d-flex col-12 justify-content-end">
                    <button class="btn btn-primary px-5">Lưu</button>
                    <button class="btn btn-secondary px-3 ml-2">
                      Không Lưu
                    </button>
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
  components:{
    SlideBar_candidate,
    Header,
    Profile_menu
  }
};
</script>

<style scoped>
.body{
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
label {
  margin-bottom: 2px;
}
.right {
  border-left: 1px solid gray;
}
.titleBatBuoc {
  float: right;
  font-style: italic;
  font-size: 12px;
}
.titleRight {
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 165px;
}
.star {
  color: red;
}
.block2 {
  border-top: 1px solid lightgray;
}
.btnSave {
  color: white;
}
.btnNotSave {
  border: 1px solid blue;
  color: blue;
  background-color: white;
  margin-left: 20px;
}
</style> 