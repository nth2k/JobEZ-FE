<template>
  <div class="candidate-overview-container overflow-hidden" id="overview">
    <div class="candidate-profile-online-title pt-4 pl-4 pr-4">
      <p class="highlight-title m-0">Hồ sơ online</p>
    </div>
    <div class="candidate-profile-online-header pl-5 pt-5 row">
      <div class="col-12 col-sm-3">
        <img
          src="../../../../assets/avatar213631.jpg"
          alt="Hình Ảnh Ứng Viên"
        />
      </div>
      <div class="col-12 col-sm-9 row">
        <div class="col-12 candidate-name">Tên Ứng Viên</div>
        <div class="col-12 candidate-position mb-2">Vị Trí Công Việc</div>
        <div class="col-12 row">
          <div class="col-12 col-sm-6 mb-2">Ngày tháng năm sinh</div>
          <div class="col-12 col-sm-6 mb-2">Số điện thoại</div>
          <div class="col-12 col-sm-6 mb-2">Giới tính</div>
          <div class="col-12 col-sm-6 mb-2">Email</div>
          <div class="col-12 col-sm-6 mb-2">Tình trạng kết hôn</div>
          <div class="col-12 col-sm-6">Đại chỉ</div>
        </div>
      </div>
    </div>
    <div class="candidate-profile-online-body pl-5 pt-5">
      <div class="basic-information">
        <ul>
          <h3 class="title">Thông Tin Cơ Bản</h3>
          <li>Chỗ ở hiện tại :Quận Cầu Giấy, Hà Nội</li>
          <li>Nơi làm việc mong muốn</li>
          <li>Ngành nghề : <span>Back-end: Java</span></li>
          <li>Kinh nghiệm làm việc: Chưa có kinh nghiệm làm việc</li>
          <li>Mức lương mong muốn: 5-7 triệu</li>
          <li>Hình thức làm việc: Toàn thời gian cố định</li>
          <li>Cấp bậc mong muốn: Nhân viên</li>
        </ul>
      </div>

      <div class="career-goals">
        <ul>
          <h3 class="title">Mục Tiêu Nghề Nghiệp</h3>
          <li>Mong muốn tìm được việc làm trong môi trường chuyên nghiệp</li>
          <li>Công việc ổn định để gắn bó lâu dài</li>
          <li>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the
          </li>
        </ul>
      </div>

      <div class="personal-skills">
        <ul>
          <h3 class="title">Kỹ Năng Bản Thân</h3>
          <li>Kỹ năng lắng nghe và giải quyết vấn đề hiệu quả</li>
          <li>
            Kỹ năng giao tiếp linh hoạt, có khả năng thuyết trình và trình bày
          </li>
          <li>Có khả năng thích nghi nhanh với môi trường làm việc</li>
          <li>Có khả năng quản lý sắp xếp khối lượng công việc lớn</li>
        </ul>
      </div>

      <div class="experiences">
        <ul>
          <h4 class="title">Kinh Nghiệm Bản Thân</h4>
          <div class="row">
            <p class="title border-0 col-6">Nhân Viên Bán Hàng</p>
            <p class="col-6 title  border-0 text-right pr-5">01/2021 - Hiện tại</p>
          </div>
          <p>Công ty TNHH ABC</p>
          <li>In publishing and graphic design</li>
          <li>In publishing and graphic design</li>
          <li>In publishing and graphic design</li>
        </ul>
      </div>

      <div class="degrees">
        <ul>
          <h3 class="title">Bằng Cấp Chứng Chỉ</h3>
          <li class="title border-0">Đại học FPT HN</li>
          <li>Xếp loại tốt nghiệp : <strong>Giỏi</strong></li>
        </ul>
      </div>

      <div class="language-informatics">
        <ul>
          <h3 class="title">Ngoại Ngữ Tin Học</h3>
          <li>Tin học văn phòng: Excel, word, powerpoint</li>
          <li>Toeic 650</li>
          <li>Toeic 650</li>
        </ul>
      </div>

      <div class="personal-reference">
        <ul>
          <h3 class="title">Người Tham Chiếu</h3>
          <li>Nguyễn Thế Toàn - CTO</li>
          <li>Số điện thoại: 0845684888</li>
        </ul>
      </div>

      <div class="text-center">
        <button class="download-profile mr-3" type="button">Tải hồ sơ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidateProfileOnline",
};
</script>

<style scoped>
* {
  background-clip: border-box;
  font-family: "Open Sans";
  font-style: normal;
}

.candidate-overview-container {
  box-shadow: 0px 0px 19px rgba(51, 51, 51, 0.25);
  border-radius: 5px;
  background-clip: content-box;
  box-sizing: content-box;
}

.candidate-profile-online-header {
  margin: 0;
  padding-bottom: 2rem;
  border-bottom: 1rem solid #deb887;
}

.candidate-profile-online-title {
  color: #4c5bd4;
  font-weight: 400;

  border-bottom: 2px solid gray;
}

.candidate-profile-online-title p {
  width: 14%;
}

p.highlight-title {
  margin-top: 5px;
  border-bottom: 2px solid #4c5bd4;
}

.candidate-profile-online-header {
  background: #faebd7;
}

.candidate-name {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #deb887;
}

.candidate-position {
  color: #666666;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
}

.title {
  color: #deb887;
  border-bottom: 1px dotted #deb887;
}

.download-profile {
  padding: 0.5rem 2rem;
  color: #4C5BD4;
  border: 1px solid #4C5BD4;
  margin-bottom: 2rem
}
</style>