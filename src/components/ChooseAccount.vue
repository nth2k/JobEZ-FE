<template>
  <div class="col-6 intro">
    <div class="choose-account">
      <h3>JobEZ</h3>
      <p>Choose the account you are using</p>
      <button class="btn btn-light">YOU ARE A CANDIDATE</button><br />
      <button class="btn btn-light">YOU ARE A RECRUITER</button><br />
      <div class="descibe">
        <ul>
          <li><p>100.000+ dream job</p></li>
          <li><p>365+ professional cv template</p></li>
          <li><p>22+ recruitment questionnaire</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ChooseAccount"
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

.choose-account {
  background-color: rgba(51, 51, 51, 0.3);
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin: 100px;
  border-radius: 20px;
  padding: 30px;
}

.choose-account button {
  margin-top: 30px;
  width: 300px;
  height: 60px;
  border-radius: 20px;
}

.choose-account p {
  margin-top: 30px;
}

button{
  opacity: 0.5;
}

button:hover{
  opacity: 1;
  background-color: white;
  transition: all 0.5s;
}
</style>