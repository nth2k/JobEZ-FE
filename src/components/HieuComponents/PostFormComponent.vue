<template>
  <div class="container-fluid b bg-white"><br>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <form action="/#">
          <div class="a"><span class="a"><b>&nbsp;&nbsp;Thông tin đăng tuyển</b></span></div><br>
          <div class="c"><b>Vị trí đăng tuyển</b><span class="required"> *</span></div><br>
          <input type="text" class="form-control" id="position" placeholder="VD: Nhân viên kinh doanh, nhân viên hành chính"/><br>
            <div class="c"><b>Cấp bậc</b><span class="required"> *</span></div><br>
             <h4> Default Mode</h4>
            <ejs-multiselect id='sample-list1' :dataSource='sportsData' :mode='defaultMode' :placeholder='waterMark'></ejs-multiselect>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import a from './dataSource.json';

Vue.use(MultiSelectPlugin);

export default Vue.extend ({
    data: function() {console.log(a)
        return {
            waterMark: 'Vui lòng chọn',
            defaultMode: 'Default',
            boxMode: 'Box',
            delimiterMode: 'Delimiter',
            sportsData: a['sportsData']
        };
    }
});
</script>

<style>
div.a {
  border-left: 7px solid blue;
  font-size: large;
}
div.c{
    border-left: 7px solid white;
    font-size: large;
}
span.a {
  color: blue;
}
.b{
    box-shadow: 4px 1px 20px rgba(67, 56, 56, 0.1);
    border-radius: 1rem;
}
.required{
  color: red;
}
.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>