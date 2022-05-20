<template>
  <div>
    <HeaderComponent />
    <h2 class="text-center mt-3">Candidate Profile</h2>
    <form action="" method="post">
      <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-3 left-form">
          <span>Birthdate<span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Enter dd/MM/yyyy" /><br />
          <span>Gender<span style="color: red">*</span></span
          ><br />
          <select name="gender" id="">
            <option value="1">Male</option>
            <option value="0">Female</option></select
          ><br />
          <span>Marital status<span style="color: red">*</span></span
          ><br />
          <select name="marital" id="">
            <option value="0">Single</option>
            <option value="1">Married</option></select
          ><br />
          <span>University<span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Enter university name" /><br />
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
          <span>Salary<span style="color: red">*</span></span
          ><br />
          <select name="salary" id="">
            <option value="0">Less than 5M</option>
            <option value="1">5M to 10M</option>
            <option value="2">10M to 20M</option>
            <option value="3">20M to 30M</option>
            <option value="4">Greater than 30M</option></select
          ><br />
          <span>Working form<span style="color: red">*</span></span
          ><br />
          <select name="workingForm" id="">
            <option value="0">On site</option>
            <option value="1">Remote</option></select
          ><br />
        </div>
        <div class="col-5 right-form">
          <span>Career goals<span style="color: red">*</span></span
          ><br />
          <span style="font-style: italic; color: #7a7a7a"
            >(can add multiple goals or add description)</span
          ><br />
          <input type="checkbox" name="" id="" />Looking for a stable and
          long-term job<br />
          <input type="checkbox" name="" id="" />Looking for a job with good
          advancement opportunities<br />
          <input type="checkbox" name="" id="" />Looking for a job with good
          salary<br />
          <input type="checkbox" name="" id="" />Looking for a place with a good
          opportunity to dedicate myself<br />
          <input type="checkbox" name="" id="" />Desire to work in a
          professional environment<br />
          <span style="font-style: italic" class="ml-5"
            >Description of career goals (if any):</span
          ><br />
          <textarea class="mt-3" rows="5" cols="50"></textarea><br />
          <span>Personal skills<span style="color: red">*</span></span
          ><br />
          <span style="font-style: italic; color: #7a7a7a"
            >(can add multiple skills or add description)</span
          ><br />
          <input type="checkbox" name="" id="" />Know how to listen and receive
          ideas<br />
          <input type="checkbox" name="" id="" />Hardworking, diligent to learn
          about problems in work and life<br />
          <input type="checkbox" name="" id="" />Sense of responsibility at
          worky<br />
          <input type="checkbox" name="" id="" />Withstand pressure at work<br />
          <input type="checkbox" name="" id="" />Have fun with colleagues<br />
          <span style="font-style: italic" class="ml-5"
            >Description of career skills (if any):</span
          ><br />
          <textarea class="mt-3" rows="5" cols="50"></textarea><br />
        </div>
        <div class="col-1"></div>
        <span class="mt-5 w-100 text-center"
          >By clicking the register button, you agree to JobEZ's usage
          agreement</span
        >
        <button type="submit" class="btn mt-5 mb-5 btn-regist">Regist</button>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "OnlineCVForm",
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

.left-form select {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.right-form input {
  margin-top: 20px;
  width: 15px;
  height: 15px;
  margin-right: 20px;
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