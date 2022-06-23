<template>
  <div class="container-fluid candidate-support bg-white">
    <div class="row">
      <div class="col-1">
        <img class="rounded-circle img-fluid" src="@/assets/ns.jpg" />
      </div>
      <div class="col-4 text-left p-0 my-4">
        Chuyên viên hỗ trợ tư vấn dành cho ứng viên
      </div>
      <div class="col-4 text-left p-0 my-4">
        Ms Thu Hằng
        <span class="text-primary">- SĐT: 0359742858 - Zalo: 0814640858</span>
      </div>
      <div class="col-3 text-left p-0 my-4 text-primary">
        Email: rubyhhb17@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidateSupport",
};
</script>

<style scoped>
.candidate-support {
  box-shadow: 4px 1px 20px rgba(67, 56, 56, 0.1);
  border-radius: 1rem;
}
.candidate-support div div img {
  height: 4rem;
  width: 4rem;
  margin-left: 2.2rem;
}
</style>