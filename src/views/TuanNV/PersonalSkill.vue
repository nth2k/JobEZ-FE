<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div class="leftHoso">
          <profile_menu />
        </div>
        <div class="right ml-4">
          <div class="title titleRight mb-3">
            <span class="pb-2">Kỹ năng bản thân</span>
          </div>
          <form>
            <div class="form-group shadow-textarea">
              <textarea
                class="form-control z-depth-1"
                rows="9"
                placeholder="Mô tả ngắn gọn về kỹ năng bản thân"
              ></textarea>
            </div>
            <div class="row">
              <div class="d-flex col-12 justify-content-center">
                <button class="btn btn-primary px-5">Lưu</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
// import profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
export default {
  components: {
    profile_menu,
    SlideBar_candidate,
    Header,
  },
};
</script>

<style scoped>
.leftHoso {
  flex: 0 0 20%;
}
.right {
  margin-left: 40px;
  font-size: 14px;
}
.title {
  font-weight: bold;
  margin-right: 5px;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.right {
  flex: 0 0 80%;
  max-width: 70%;
}
span {
  border-bottom: 1px solid #2a3563cc;
  color: #2a3563cc;
  font-size: 16px;
  font-weight: 18px;
}
textarea {
  border-radius: 10px;
  resize: none;
}
.leftHoso{
  border-right: 1px solid lightgray;
}
</style> 
