<template>
  <div class="row favorites">
    <div class="col-12 text-left px-0">
      <div class="header h4 font-weight-bold pl-3">SỞ THÍCH</div>
    </div>
    <div class="col-12 text-left">
      <div class="row">
        <div class="col-10">
          <div contenteditable="true">
            - CODE là đam mê
            <br />- Tìm hiểu công nghệ mới <br />- Nghe nhạc <br />- Đá bóng
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorite",
};
</script>

<style>
.header {
  border-left: 4px solid gray;
  color: #fcb617;
  line-height: 1.2rem;
  font-weight: 1.2rem;
}
</style>