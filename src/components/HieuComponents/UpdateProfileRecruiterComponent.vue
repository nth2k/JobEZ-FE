<template>
  <div class="container-fluid b bg-white"><br/>
  <form action="#">
    <div class="row">
        <div class="col-4">
            <div><b>Thông tin tài khoản</b></div><br/>
            <div class="indent"><b>Thông tin tài khoản</b></div>
            <div class="indent"><input
              type="text"
              class="form-control"
              v-model="gmailValue"
              placeholder="Ví dụ: 1 tuần hoặc 1 tháng"
              readonly
            /></div><br/>
            <div class="indent"><b>Mật Khẩu</b></div>
            <div class="indent"><input
              type="password"
              class="form-control"
              v-model="passwordValue"
              placeholder="Ví dụ: Mật khẩu"
              readonly
            /></div><br/><br/>
            <div><b>Thông tin công ty</b></div><br/>
            <div class="indent"><b>Tên công ty (<span class="required">*</span>)</b></div>
            <div class="indent"><input
              type="text"
              class="form-control"
              v-model="companyNameValue"
              placeholder="Ví dụ: tên công ty"
            /></div><br/>
            <div class="indent"><b>Quy mô công ty (<span class="required">*</span>)</b></div>
            <div class="indent">
                <multiselect
              v-model="companyQuantityValue"
              track-by="cqName"
              label="cqName"
              placeholder="Quy mô công ty"
              :options="companyQuantityOptions"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
            </div><br/>
            <div class="indent"><b>Mã số thuế</b></div>
            <div class="indent"><input
              type="text"
              class="form-control"
              v-model="companyTaxValue"
              placeholder="Ví dụ: Mã số thuế"
            /></div><br/><br/>
            <div><b>Thông tin liên hệ</b></div><br/>
            <div class="indent"><b>Người liên hệ (<span class="required">*</span>)</b></div>
            <div class="indent"><input
              type="text"
              class="form-control"
              v-model="contactNameValue"
              placeholder="Ví dụ: Người liên hệ"
            /></div><br/>
            <div class="indent"><b>Địa chỉ liên hệ (<span class="required">*</span>)</b></div>
            <div class="indent"><input
              type="text"
              class="form-control"
              v-model="contactAddressValue"
              placeholder="Ví dụ: Địa chỉ liên hệ"
            /></div><br/>
        </div>
        <div class="col-4">
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/>
            <div class="indent"><b>Địa chỉ công ty (<span class="required">*</span>)</b></div>
            <div class="indent a"><input
              type="text"
              class="form-control"
              v-model="companyAddressValue"
              placeholder="Ví dụ: Địa chỉ công ty"
            /></div><br/>
            <div class="indent"><b>Tỉnh/thành phố (<span class="required">*</span>)</b></div>
            <div class="indent a">
                <multiselect
              v-model="provinceCityValue"
              track-by="pcName"
              label="pcName"
              placeholder="Tỉnh/thành phố"
              :options="provinceCityOption"
              :searchable="false"
              :allow-empty="true"
            ></multiselect>
            </div><br/>
            <div class="indent"><b>Điện thoại cố định (<span class="required">*</span>)</b></div>
            <div class="indent a"><input
              type="text"
              class="form-control"
              v-model="companyPhoneValue"
              placeholder="Ví dụ: Điện thoại cố định"
            /></div><br/><br/>
            <br/><br/>  
            <div class="indent"><b>Số điện thoại liên hệ (<span class="required">*</span>)</b></div>
            <div class="indent a"><input
              type="text"
              class="form-control"
              v-model="contactPhoneValue"
              placeholder="Ví dụ: Người liên hệ"
            /></div><br/>
            <div class="indent"><b>Email liên hệ (<span class="required">*</span>)</b></div>
            <div class="indent a"><input
              type="text"
              class="form-control"
              v-model="contactAddressValue"
              placeholder="Ví dụ: Địa chỉ liên hệ"
            /></div><br/><br/>
            <div class="button">
            <button v-on:click="updateProfileRecruiter()" class="postbtn">Đăng tin</button>
          </div>
        </div>
        <div class="col-4">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/>
            <div class="indent"><b>Website</b></div>
            <div class="indent a"><input
              type="text"
              class="form-control"
              v-model="websiteNameValue"
              placeholder="Ví dụ: tên công ty"
            /></div><br/>
            <div class="indent"><b>Giới thiệu về công ty (<span class="required">*</span>)</b></div>
            <div class="indent a">
                <textarea
              type="textarea"
              class="form-control a"
              v-model="jobDescription"
              placeholder="discription"
            ></textarea>
            </div><br/>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
components: {
    Multiselect,
  },
  data(){
    return{
        provinceCityValue: null,
        companyQuantityValue: null,
        companyQuantityOptions:[{ cqName: "Dưới 10 người"},{ cqName: "10-20 người"},{ cqName: "20-50 người"},{ cqName: "Trên 50 người"}],
        provinceCityOption:[{ pcName: "Hà Nội"},{ pcName: "Hồ Chí Minh"},{ pcName: "Đà Nẵng"},{ pcName: "Đà Lạt"}],
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.indent{
    padding-left: 1em;  
}
.required{
    color: red;
}
.b{
  box-shadow: 4px 1px 20px rgba(67, 56, 56, 0.1);
  border-radius: 1rem;
}
.a{
  padding-top: 1.5px
}
textarea.a {
  padding: 40px;
}
.button {
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
}
.postbtn {
  background-color: orange;
  border: none;
  color: white;
  text-align: center;
  border: 1px solid #c3c3c3;
  padding: 10px 50px;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
}
</style>