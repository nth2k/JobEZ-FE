<template>
  <div class="row award">
    <div class="col-12 text-left px-0">
      <div class="header h4 font-weight-bold pl-3 text-uppercase">
        GIẢI THƯỞNG
      </div>
    </div>
    <div class="col-12 text-left">
      <div class="row">
        <div class="col-10">
          <div contenteditable="true" class="custom-outline">
            - Thành viên trong team timviec365.vn có thành tích xuất sắc nhất
            <br />- Bằng khen TTS tài năng
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Award",
};
</script>

<style scoped>
.header {
  border-left: 4px solid gray;
  color: #fcb617;
  line-height: 1.2rem;
  font-weight: 1.2rem;
}
.award {
  padding: 0.5rem;
}

.award:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>