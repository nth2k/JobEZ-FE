<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mt-3 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="right col-9">
          <div class="title titleRight">Thông tin liên hệ</div>
          <div>
            <form>
              <div class="container-md">
                <div class="row block1 pb-3">
                  <div class="col-5">
                    <div>
                      <label for="fullname"
                        >Họ và tên <span class="text-danger">*</span></label
                      >
                      <div class="titleBatBuoc"><span>(</span><span class="star">*</span><span>)Thông tin bắt buộc</span></div>
                      <input
                        type="text"
                        class="form-control"
                        name="fullname"
                        id="fullname"
                        placeholder="Họ và tên"
                      />
                    </div>
                    <div>
                      <label for="email"
                        >Email <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Nhậo địa chỉ email tại đây"
                      />
                    </div>
                    <div>
                      <label for="phoneNumber"
                        >Số điện thoại <span class="text-danger">*</span></label
                      >
                      <input
                        type="number"
                        class="form-control"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-5">
                    <input
                      type="file"
                      name="myImage"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </div>
                </div>
                <div class="row pt-5 block2">
                  <div class="col-5">
                    <label for="inputDOB"
                      >Ngay sinh<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="inputDOB"
                      placeholder="Nhập ngày/tháng/năm"
                    />
                    <label for="inputAddress"
                      >Địa chỉ<span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Nhập địa chỉ hiện tại"
                    />
                    <label for="rank"
                      >Xep loai <span class="text-danger">*</span></label
                    >
                    <select name="gender" id="gender" class="form-control">
                      <option value="-1">Chọn giới tính</option>
                      <option value="1">Nam</option>
                      <option value="2">Nữ</option>
                      <option value="3">Giới tính thứ 3</option>
                    </select>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-5">
                    <label for="married"
                      >Hôn nhân <span class="text-danger">*</span></label
                    >
                    <select name="married" id="married" class="form-control">
                      <option value="-1">Chọn tình trạng hôn nhân</option>
                      <option value="1">Độc thân</option>
                      <option value="2">Đã có gia đình</option>
                    </select>
                    <label for="country"
                      >Tinh thành<span class="text-danger">*</span></label
                    >
                    <select name="country" id="country" class="form-control">
                      <option value="-1">Chọn tỉnh thành</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">TP. Hồ Chí Minh</option>
                    </select>
                    <label for="quanhuyen"
                      >Quận Huyện<span class="text-danger">*</span></label
                    >
                    <select
                      name="quanhuyen"
                      id="quanhuyen"
                      class="form-control"
                    >
                      <option value="-1">Chọn quận huyện</option>
                      <option value="1">Thạch Thất</option>
                      <option value="2">Từ Liêm</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button class="btn btn-primary btnSave px-5 mt-5" type="submit">
                  Lưu
                </button>
                <button
                  class="btn btn-primary px-4 mt-5 btnNotSave"
                  type="button"
                >
                  Không Lưu
                </button>
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

.right{
  border-left: 1px solid gray;
}
.titleBatBuoc{
  float: right;
  font-style: italic;
  font-size: 12px;
}
.titleRight {
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 125px;
}
.star{
  color:red;
}
.block2 {
  border-top: 1px solid lightgray;
}
.btnSave{
  color:white;
}
.btnNotSave {
  border: 1px solid blue;
  color: blue;
  background-color: white;
  margin-left: 20px;
}
</style>