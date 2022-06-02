<template>
  <form>
    <div class="container-md">
      <div class="row">
        <div class="col-5">
          <label for="inputJob"
            >Công việc<span class="text-danger">*</span></label
          >
          <input
            type="text"
            class="form-control mb-3"
            id="inputJob"
            placeholder="Công việc mong muốn"
          />

          <label for="place">Địa Điểm<span class="text-danger">*</span></label>
          <select name="married" id="place" class="form-control mb-3">
            <option value="-1">Chọn từ 1 -3 tinh thành</option>
            <option value="1">Hà Nội</option>
            <option value="2">TP. Hồ Chí Minh</option>
          </select>

          <label for="hinhthuc"
            >Hình thức<span class="text-danger">*</span></label
          >
          <select name="married" id="hinhthuc" class="form-control mb-3">
            <option value="-1">Chọn hình thức</option>
            <option value="1">Online</option>
            <option value="2">Offline</option>
          </select>
        </div>
        <div class="col-2"></div>
        <div class="col-5">
          <label for="capbac"
            >Cấp bậc mong muốn<span class="text-danger">*</span></label
          >
          <select name="married" id="capbac" class="form-control mb-3">
            <option value="-1">Vui lòng chọn</option>
            <option value="1">Coder</option>
            <option value="2">Manager</option>
          </select>
          <label for="salary"
            >Mức lương<span class="text-danger">*</span></label
          >
          <select name="married" id="salary" class="form-control mb-3">
            <option value="-1">Chọn mức lương</option>
            <option value="1">10tr</option>
            <option value="2">20tr</option>
          </select>
          <label for="exp">Kinh nghiệm<span class="text-danger">*</span></label>
          <select name="married" id="exp" class="form-control mb-3">
            <option value="-1">Chọn kinh nghiệm</option>
            <option value="1">1 năm</option>
            <option value="2">5 năm</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label for="exp">Ngành nghề<span class="text-danger">*</span></label>
          <select name="married" id="exp" class="form-control mb-3">
            <option value="-1">Chọn ngành nghề</option>
            <option value="1">IT</option>
            <option value="2">AI</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="d-flex col-12 justify-content-end">
          <button class="btn btn-primary px-5">Luu</button>
          <button class="btn btn-secondary px-3 ms-1">Khong luu</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  margin-bottom: 2px;
}
</style>