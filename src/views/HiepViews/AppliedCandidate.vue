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
          Hồ sơ đã ứng tuyển
        </h3>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Tên ứng viên</th>
              <th scope="col">Vị trí</th>
              <th scope="col">Ngày nộp</th>
              <th scope="col">Kết quả</th>
              <th scope="col">Xóa ứng viên</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nguyễn Trung Hiếu</td>
              <td>Trông quán net</td>
              <td>15/03/2020</td>
              <td>
                <v-select
                  class="w-75"
                  :items="items"
                  label="Trạng thái"
                  outlined
                ></v-select>
              </td>
              <td><button class="btn btn-danger">Xóa</button></td>
            </tr>
            <tr>
              <td>Nguyễn Trung Hiếu</td>
              <td>Trông quán net</td>
              <td>15/03/2020</td>
              <td>
                <v-select
                  class="w-75"
                  :items="items"
                  label="Trạng thái"
                  outlined
                ></v-select>
              </td>
              <td><button class="btn btn-danger">Xóa</button></td>
            </tr>
           <tr>
              <td>Nguyễn Trung Hiếu</td>
              <td>Trông quán net</td>
              <td>15/03/2020</td>
              <td>
                <v-select
                  class="w-75"
                  :items="items"
                  label="Trạng thái"
                  outlined
                ></v-select>
              </td>
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
  name: "AppliedCandidate",
  components: { Header, RecruiterNavigator },
  data: () => ({
    items: ["Đến phỏng vấn", "Hồ sơ đạt yêu cầu", "Không đạt yêu cầu"],
  }),
};
</script>

<style scoped>
</style>