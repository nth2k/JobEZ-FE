<template>
  <div>
    <span class="title"><b>// Đổi mật khẩu nhà tuyển dụng</b></span>
    <div class="container-fluid b bg-white">
      <br />
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <form action="#">
            <label class="typo__label c"
              ><b>Mật khẩu hiện tại</b
              ><span class="required"> *</span
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                class="oblique"
                >(<span class="required">*</span>)thông tin bắt buộc</span
              ></label
            >
            <input
              type="password"
              class="form-control"
              v-model="currentPasswordValue"
              placeholder="Mật khẩu hiện tại"
            /><br/>
            <label class="typo__label c"
              ><b>Mật khẩu mới</b
              ><span class="required"> *</span
              ></label
            >
            <input
              type="password"
              class="form-control"
              v-model="newPasswordValue"
              placeholder="Mật khẩu mới"
            /><br/>
            <label class="typo__label c"
              ><b>Xác nhận lại mật khẩu</b
              ><span class="required"> *</span
              ></label
            >
            <input
              type="password"
              class="form-control"
              v-model="confirmPasswordValue"
              placeholder="Xác nhận mật khẩu"
            /><br/><br/>
            <div class="button">
            <button v-on:click="changePassword()" class="changebtn">Đổi mật khẩu</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="cancelbtn">Hủy đăng tin</button>
          </div>
          </form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>

import ChangePasswordRecruiterService from "@/service/ChangePasswordRecruiterService.js";

export default {
    data(){
        return {
            currentPasswordValue: null,
            newPasswordValue: null,
            confirmPasswordValue: null,
        }
    },
    methods: {
    async changePassword() {
        if(this.newPasswordValue==this.confirmPasswordValue){
            let users = {
                password: this.newPasswordValue,
            }
            var userFormData = new FormData();
            userFormData.append('password',users.password);
            console.log(userFormData);
            await ChangePasswordRecruiterService.changePassword(userFormData).then((res)=>{
                console.log(res);
            },(error)=>{
                console.log(error);
        });
        }else{
            alert("mat khau moi va xac nhan lai mat khau khong giong nhau!");
        }
    }
}
};
</script>
    
<style>
span.title {
  color: darkblue;
  font-size: large;
}
span.oblique {
  font-style: oblique;
}
.b {
  box-shadow: 4px 1px 20px rgba(67, 56, 56, 0.1);
  border-radius: 1rem;
}
.required {
  color: red;
}
.button {
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
}
.cancelbtn {
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
.changebtn {
  background-color: yellow;
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