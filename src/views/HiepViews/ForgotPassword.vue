<template>
  <div>
    <TopHeaderComponent />
    <div class="row">
      <div class="col-6 intro">
        <h1>JobEZ</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div class="col-6" style="padding: 150px">
        <h2>Nhập email</h2>
        <form class="login-form mt-5" action="" method="">
          <h5>Email<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Nhập email" />
          <button class="btn mt-5" type="submit">Tiếp theo</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
export default {
  name: "ForgotPassword",
  components: {
    TopHeaderComponent,
  },
};
</script>

<style scoped>
.intro {
  background-image: url(https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFob2V8ZW58MHx8MHx8&w=1000&q=80);
  height: 650px;
  left: 40px;
  top: 45px;
  border-radius: 20px;
}

.intro h1 {
  color: white;
  margin-top: 200px;
  margin-left: 300px;
  margin-right: 300px;
}

.intro p {
  color: white;
  margin: 50px 100px;
}

.tab button a {
  text-decoration: none;
  color: #6874d7;
}

h2 {
  margin-top: 20px;
  color: #6874d7;
}

.login-form {
  margin-top: 20px;
}

.login-form h5 {
  margin-bottom: 20px;
}

.login-form input {
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
}

.login-form p {
  float: right;
}

.login-form button {
  width: 500px;
  height: 50px;
  background-color: #6874d7;
  color: white;
}
</style>

