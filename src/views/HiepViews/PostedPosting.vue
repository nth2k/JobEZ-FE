<template>
  <div class="d-flex">
    <RecruiterNavigator class="w-25" />
    <div class="w-75">
      <Header />
      <div class="mt-5 p-5">
        <h3
          style="
            color: #4c5bd4;
            border-left: 7px solid #4c5bd4;
            padding-left: 10px;
          "
        >
          Thông số tin tuyển dụng
        </h3>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Vị trí tuyển dụng</th>
              <th scope="col">Thống kê</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hạn nộp</th>
              <th scope="col">Dịch vụ</th>
              <th scope="col">Sửa tin</th>
              <th scope="col">Xóa tin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Tin đã được đăng </td>
              <td>@mdo</td>
              <td>Miễn phí</td>
              <td><button class="btn btn-primary">Sửa</button></td>
              <td><button class="btn btn-danger">Xóa</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
              <td><button class="btn btn-primary">Sửa</button></td>
              <td><button class="btn btn-danger">Xóa</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Mark</td>
              <td><button class="btn btn-primary">Sửa</button></td>
              <td><button class="btn btn-danger">Xóa</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import RecruiterNavigator from "@/components/HiepComponents/RecruiterNavigator.vue";
export default {
  name: "PostedPosting",
  components: { Header, RecruiterNavigator },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>