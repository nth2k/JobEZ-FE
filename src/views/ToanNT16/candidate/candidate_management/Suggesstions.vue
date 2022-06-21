<template>
  <div class="p-2 suggestion-container text-center">
    Hãy cập nhật ngoại ngữ của bạn (nếu có) để tăng chất lượng hồ sơ và thu hút
    nhà tuyển dụng <span class="text-danger"> >> Cập nhật ngay </span>
  </div>
</template>

<script>
export default {
  name: "Suggesstions",
};
</script>

<style scoped>
.suggestion-container {
  background: rgba(237, 237, 253, 0.2);
  border-radius: 5px;
}

.text-danger {
  color: #ea4860;
  cursor: pointer;
}
</style>