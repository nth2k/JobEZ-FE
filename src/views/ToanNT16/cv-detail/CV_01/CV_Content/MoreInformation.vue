<template>
  <div class="more-information-container">
    <header
      class="header h4 font-weight-bold pb-2 text-uppercase border-bottom"
    >
      thông tin thêm
    </header>
    <div class="more-information-content">
      <div class="text-uppercase"><strong>thông tin thêm</strong></div>
      <div contenteditable="true">Những thông tin khác (nếu cần)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreInformation",
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  color: #fcb617;
  line-height: 1.2rem;
  font-weight: 1.2rem;
}
</style>