<template>
  <div class="more-information-container">
    <header
      class="header h4 font-weight-bold pb-2 text-uppercase border-bottom"
    >
      thông tin thêm
    </header>
    <div>
      <div class="text-uppercase more-information-content py-1">
        <strong>thông tin thêm</strong>
      </div>
      <div contenteditable="true" class="custom-outline">
        Những thông tin khác (nếu cần)
      </div>
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

.more-information-content {
  line-height: 1.5rem;
  font-size: 1.4rem;
}
.more-information-container {
  padding: 0.5rem;
}

.more-information-container:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>