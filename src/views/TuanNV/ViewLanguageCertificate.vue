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
              <div v-if="!listLanguage.length" class="pt-4">
                <div>Không có bằng ngôn ngữ - tin học</div>
                <button @click="addLanguageCertificate(userId)" class="py-1 px-3 btnAdd">Thêm +</button>
              </div>
              <div class="row d-flex tbody" v-for="language in listLanguage" v-bind:key="language.id">
                <div class="col-4">{{language.name}}</div>
                <div class="col-4">{{language.certificate_name}}</div>
                <div class="col-3">{{language.mark}}</div>
                <div class="col-1" style="padding: 0">
                  <span class="icon_tt">
                    <a
                      class="nav-link"
                      href="#"
                      id="userDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="@/assets/icon_dot.png" class="rounded-circle" />
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="userDropdownMenuLink"
                    >
                      <span class="dropdown-item" @click="addLanguageCertificate(userId)"
                        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg> Thêm</span>
                      <span class="dropdown-item" @click="editLanguageCertificate(language.id)"
                        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg> Sửa</span>
                      <span class="dropdown-item remove" @click="deleteLanguageCertificate(language.id)"
                        ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                      </svg> Xóa</span>
                    </div></span
                  >
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
  name: "ViewNgoaiNguTinHoc",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data(){
    return{
      listLanguage: [],
      userId: 1,
    };
  },
  methods:{
    getLanguageCertificate(userId){
      LanguageCertificateService.getLanguageCertificate(userId).then((res) => {
        this.listLanguage = res.data;
      });
    },
    addLanguageCertificate(userId){
      console.log(this.userId);
      this.$router.push({
        name: "AddLanguageCertificate",
        params: { userId: userId },
      });
    },
    editLanguageCertificate(languageId){
      this.$router.push({
        name: "EditLanguageCertificate",
        params: { id: languageId,
          userId: this.userId
        },
      });
    },
    deleteLanguageCertificate(languageId){
      let textConfirm = "Press Ok to delete your language certificate.";
      if(confirm(textConfirm) == true){
        LanguageCertificateService.deleteLanguageCertificate(languageId);
        alert('Xóa thành công');
        location.reload();
      }
    }
  },
  created(){
    this.getLanguageCertificate(this.userId);
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
  border-bottom: 1px solid lightgray;
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
.nav_link{
  padding: 0;
}
.btnAdd {
  background-color: #eceefa;
  color: #333333;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.dropdown-item{
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
}
.remove{
  color: red;
  border-bottom: none;
}
</style> 
