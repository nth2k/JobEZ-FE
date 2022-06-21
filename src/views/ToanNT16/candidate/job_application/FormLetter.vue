<template>
  <form>
    <div id="form-letter" class="container mb-4">
      <div class="mx-auto text-center">
        <div class="h5 font-weight-bold mt-5">
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </div>
        <div class="">Độc lập - Tự do - Hạnh phúc</div>
        <div class="mb-4">......o0o......</div>
        <div class="h4 font-weight-bold">ĐƠN ỨNG TUYỂN</div>
        <div class="text-left">
          Kính gửi:
          <span contenteditable="true"
            ><strong
              >Ban giám đốc Công ty Hưng Hà SJC cùng bộ phận tuyển dụng nhân sự
              của Công ty</strong
            ></span
          >
        </div>
        <div class="text-left">
          Tên tôi là:
          <span contenteditable="true">Nguyễn Thế Toàn</span>
        </div>
        <div class="text-left">
          Sinh năm:
          <span contenteditable="true">//</span>
        </div>
        <div class="text-left mb-4">
          Địa chỉ:
          <span contenteditable="true" placeholder="123-45-678"></span>
        </div>
        <div class="text-left" contenteditable="true">
          <div>
            Qua trang web Timviec365.vn, tôi được biết Công ty đang có nhu cầu
            tuyển dụng nhân sự tại vị trí Nhân viên kinh doanh. Hiện tại tôi cảm
            thấy bản thân có những yếu tố phù hợp với công việc này nên viết đơn
            này kính mong công ty xem xét và chấp thuận nguyện vọng của tôi.
          </div>
          <div>
            Tôi vừa tốt nghiệp trường Đại học Kinh tế - Đại học Quốc gia Hà Nội
            vào tháng 5/2019 chuyên ngành Quản trị kinh doanh. Mặc dù mới ra
            trường và chưa chính thức làm việc ở vị trí nhân viên kinh doanh ở
            bất cứ công ty nào nhưng tôi nhận thấy bản thân là người có tinh
            thần học hỏi tích cực và quá trình đi thực tập được tiếp xúc với môi
            trường làm việc thực tế, lại đã từng tham gia học một khóa Thực hành
            bán hàng online và được áp dụng trực tiếp vào công việc khi đi làm
            thêm tại Cửa hàng thời trang Shop Xinh. Với những kinh nghiệm thực
            tế đã tích lũy được thì tôi rất tự tin vào khả năng của mình có thể
            làm tốt các nhiệm vụ tại vị trí đang ứng tuyển.
          </div>
          <div>
            Tôi rất mong muốn được làm việc tại Công ty để có cơ hội phát triển
            các kỹ năng của bản thân, được vận dụng những kiến thức còn nóng hổi
            vào thực tế, đồng thời tích lũy kinh nghiệm quan trọng để giúp bản
            thân thăng tiến hơn trong công việc. Với tinh thần sẵn sàng ứng
            tuyển vào vị trí nhân viên kinh doanh tại Công ty, tôi đã trang bị
            cho bản thân mình những điều kiện tốt nhất như khả năng sử dụng tin
            học văn phòng thành thạo, khả năng làm việc độc lập và làm việc nhóm
            hiệu quả, kỹ năng giao tiếp và thuyết trình. Đặc biệt, tôi là một
            người có tinh thần trách nhiệm cao với công việc.
          </div>
          Vì vậy, tôi rất mong công ty sẽ tạo điều kiện tốt nhất để tôi được
          cống hiến hết sức trẻ và nhiệt huyết của mình cho công ty. Tôi xin
          chân thành cảm ơn!
        </div>
        <div class="signature">
          <div class="text-right">
            <strong
              ><span contenteditable="true">Hà Nội</span>, ngày
              <span contenteditable="true">05</span> tháng
              <span contenteditable="true">06</span> năm
              <span contenteditable="true">2019</span></strong
            >
          </div>
          <div class="text-right mr-5" contenteditable="true">
            <strong>Nguyễn Thế Toàn</strong>
          </div>
        </div>
      </div>
    </div>
    <div
      class="item button btn-topcv-primary text-center mx-auto mb-5 rounded"
      id="btn-save-file"
    >
      <div class="title px-2">Lưu và tải đơn</div>
      <i class="fa fa-floppy-o"></i>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormLetter",
};
</script>

<style scoped>
#form-letter {
  border: 2px solid black;
  padding-top: 2.7rem;
  padding-left: 4.5rem;
  background-image: url("@/assets/bg1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  height: 87.5rem;
  width: 50rem;
}

* {
  line-height: 1.8rem;
}

.btn-topcv-primary {
  background-color: #02b5e1;
  width: fit-content;
}

.btn-topcv-primary:hover,
.btn-topcv-primary:focus,
.btn-topcv-primary:active {
  background-color: #ff9a00;
  cursor: pointer;
}
</style>