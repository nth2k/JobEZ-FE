<template>
  <div class="row certificate">
    <div class="col-12 text-left px-0">
      <div class="header h4 font-weight-bold pl-3 text-uppercase">
        CHỨNG CHỈ
      </div>
    </div>
    <div class="col-12 text-left">
      <div class="row">
        <div class="col-10">
          <div contenteditable="true" class="custom-outline">
            - Chứng chỉ hoàn thành khóa học lập trình Android tại Aptech
            <br />- Toeic 450
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certificate",
};
</script>

<style scoped>
.header {
  border-left: 4px solid gray;
  color: #fcb617;
  line-height: 1.2rem;
  font-weight: 1.2rem;
}
.certificate {
  padding: 0.5rem;
}

.certificate:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>