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
          <div class="titleRight">Ngoại Ngữ - Tin học</div>

          <div class="container text-center mt-4">
            <div>
              <div class="row d-flex">
                <div class="col-4 thead">
                  <span class="title">Ngoại Ngữ</span>
                </div>
                <div class="col-4 thead">
                  <span class="title">Chứng chỉ</span>
                </div>
                <div class="col-3 thead">
                  <span class="title">Số điểm</span>
                </div>
                <div class="col-1 thead"></div>
              </div>
              <div class="row d-flex tbody" v-for="language in listLanguage" v-bind:key="language.id">
                <div class="col-4">{{language.certificateName}}</div>
                <div class="col-4">{{language.name}}</div>
                <div class="col-3">{{language.grade}}</div>
                <div class="col-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageCertificateService from "@/services/LanguageCertificateService.js"
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
export default {
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data(){
    return{
      listLanguage: [],
      language:{
        id: "",
        name: "",
        certificate_name: "",
        grade: "",
      },
    };
  },
  methods:{
    getLanguage(){
      LanguageCertificateService.getLanguage().then((res) => {
        this.listLanguage = res.data;
      });
    }
  },
  created(){
    this.getLanguage();
  }
};
</script>

<style scoped>
.container{
    margin-left: 15px;
}
.thead {
  border-bottom: 1px solid gray;
  color: #2a3563;
  padding-bottom: 15px;
}
.tbody {
  padding-top: 10px;
}
.title {
  font-weight: bold;
  font-size: 16px;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 155px;
  color: #2a3563;
  font-weight: bold;
}
.blockright {
  border-left: 1px solid gray;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
</style>