<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <div>
        <Header />
      </div>

      <div>
        <div><span>// Đổi mật khẩu</span></div>

        <div>
          <form>
            <div>
              <span>Mật khẩu hiện tại <span class="star">*</span></span>
              <div class="right">
                <span>(</span><span class="star">*</span
                ><span>)Thông tin bắt buộc</span>
              </div>
            </div>
            <div>
              <input
                type="password"
                id="inputcurrentpassword"
                placeholder="Mật khẩu hiện tại"
              />
            </div>
            <div>
              <span>Mật khẩu mới <span class="star">*</span></span>
            </div>
            <div>
              <input
                type="password"
                id="inputnewpassword"
                placeholder="Mật khẩu mới"
              />
            </div>
            <div>
              <span>Xác nhận lại mật khẩu<span class="star">*</span></span>
            </div>
            <div>
              <input
                type="password"
                id="inputrepassword"
                placeholder="Xác nhận mật khẩu"
              />
            </div>
            <div class="divbtnSave">
              <button type="submit" class="btn btn-primary btnSave">Lưu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate_management/Header.vue";
export default {
  components: {
    SlideBar_candidate,
    Header,
  },
};
</script>

<style scoped>
form {
  width: fit-content;
  margin: 0 auto;
  font-size: 14px;
}
button {
  margin-top: 10px;
}
input {
  width: 385.4px;
  height: 38.63px;
  border-radius: 5px;
  margin: 2px 0 10px 0;
  padding-left: 5px;
}
.divbtnSave {
  text-align: center;
}
.star {
  color: red;
}
.btnSave {
  padding: 8px 56px;
}
.right {
  float: right;
  font-size: 12px;
  font-style: italic;
}
</style>