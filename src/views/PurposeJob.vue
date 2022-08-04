<template>
  <div class="col-sm-5">
    <profile-menu />
    <div class="right container">
      <div class="title titleRight mb-3">
        <span class="pb-2">Mục tiêu nghề nghiệp</span>
      </div>
      <div class="form-group shadow-textarea">
        <textarea
          class="form-control z-depth-1"
          rows="7"
          placeholder="Mục tiều ngắn gọn mục tiêu của bản thân"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
// import profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
export default {
  //   components: { profile_menu },
};
</script>

<style scoped>
span {
  border-bottom: 1px solid #2a3563cc;
  color: #2a3563cc;
  font-size: 16px;
  font-weight: 18px;
}
textarea {
  border-radius: 10px;
  resize: none;
}
</style>