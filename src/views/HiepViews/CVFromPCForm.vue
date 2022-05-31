<template>
  <div>
    <HeaderComponent />
    <h2 class="text-center mt-5 mb-5">Profile information</h2>
    <form action="" method="post">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3 left-form">
          <span>Birthdate<span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Enter dd/MM/yyyy" /><br />
          <span>University<span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Enter university name" /><br />
        </div>
        <div class="col-3 right-form">
          <span>Rating<span style="color: red">*</span></span
          ><br />
          <select name="rating" id="">
            <option value="0">Excellent certificate</option>
            <option value="1">Good certificate</option>
            <option value="2">Average certificate</option></select
          ><br />
          <span>Years of experience<span style="color: red">*</span></span
          ><br />
          <select name="experience" id="">
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option></select
          ><br />
        </div>
        <div class="col-3"></div>
        <input type="file" name="file" id="" class="file-cv" />
      </div>
      <button type="submit" class="btn mt-5 mb-5 btn-regist">Regist</button>
    </form>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "CVFromPCForm",
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
.left-form input {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.right-form select {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.file-cv {
  position: relative;
  width: 351px;
  height: 196px;
  left: 600px;
  margin-top: 20px;
  padding: 80px;
  background: #fbfbff;
  border: 2px dashed #b4c6e7;
}

.btn-regist {
  display: block;
  margin: 0 auto;
  background-color: #4c5bd4;
  color: white;
  width: 319px;
  height: 46px;
  border-radius: 25px;
}
</style>