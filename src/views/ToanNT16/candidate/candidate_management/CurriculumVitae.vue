<template>
  <div class="row mx-auto">
    <div class="col-5 px-4 cv-container mr-5">
      <header class="py-3"><strong>// Mẫu CV đề xuất</strong></header>
      <div id="mycvs" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#mycvs" data-slide-to="0" class="active"></li>
          <li data-target="#mycvs" data-slide-to="1"></li>
          <li data-target="#mycvs" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex flex-row">
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-IT-phan-cung-mang.jpg"
                  alt="First slide"
                />
              </div>
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/CV-sinh-vien-moi-ra-truong-14dcd.jpg"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-row">
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/avt-cv-mi-pham-thoi-trang-timviec365.vn.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-ban-hang.jpg"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-row">
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-IT-phan-cung-mang.jpg"
                  alt="Third slide"
                />
              </div>
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-my-pham-thoi-trang-trang-suc.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#mycvs"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#mycvs"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="col-5 px-4 cv-container">
      <header class="py-3"><strong>// Mẫu CV đề xuất</strong></header>
      <div id="samplecv" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#samplecv" data-slide-to="0" class="active"></li>
          <li data-target="#samplecv" data-slide-to="1"></li>
          <li data-target="#samplecv" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex flex-row">
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-IT-phan-cung-mang.jpg"
                  alt="First slide"
                />
              </div>
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/CV-sinh-vien-moi-ra-truong-14dcd.jpg"
                  alt="First slide"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-row">
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/avt-cv-mi-pham-thoi-trang-timviec365.vn.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-ban-hang.jpg"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-row">
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-IT-phan-cung-mang.jpg"
                  alt="Third slide"
                />
              </div>
              <div class="col-6">
                <img
                  class="d-block w-100 rouded"
                  src="@/assets/Mockup-CV-my-pham-thoi-trang-trang-suc.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#samplecv"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#samplecv"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cv-container {
  border-radius: 1rem;
  box-shadow: 4px 1px 20px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding-bottom: 1.5rem;
}
</style>