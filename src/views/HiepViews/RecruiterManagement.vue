<template>
  <div class="d-flex">
    <RecruiterNavigator class="w-25" />
    <div class="w-75">
      <Header />
      <div class="p-5">
        <h3>// Thống kê tin đăng</h3>
        <div class="d-flex">
          <div class="statistic w-50 p-3">
            <p class="w-50" style="border-bottom: 7px solid #6d92f3">
              Hồ sơ ứng tuyển
            </p>
            <p class="number">23</p>
          </div>
          <div class="statistic w-50 p-3">
            <p class="w-50" style="border-bottom: 7px solid #6d92f3">
              Tin đã đăng
            </p>
            <p class="number">23</p>
          </div>
        </div>
        <h3>// Hồ sơ ứng tuyển mới nhất</h3>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ứng viên</th>
              <th scope="col">Vị trí ứng tuyển</th>
              <th scope="col">Ngày nộp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <h3>// Danh sách tin tuyển dụng mới nhất</h3>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Vị trí tuyển dụng</th>
              <th scope="col">Ngày hết hạn</th>
              <th scope="col">Bằng cấp</th>
              <th scope="col">Số lượng cần</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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
  name: "RecruiterManagement",
  components: { Header, RecruiterNavigator },
  data() {
    return {};
  },
};
</script>

<style scoped>
.statistic {
  height: 150px;
  background-color: #dee2ed;
  margin: 50px;
  border-radius: 20px;
  font-size: 25px;
  display: inline-flex;
}

.number {
  margin-left: 30px;
  color: #5c87f1;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  justify-content: center;
  text-align: center;
  padding: 30px;
  width: 50%;
}
</style>
