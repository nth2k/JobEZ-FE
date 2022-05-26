<template>
  <div>
    <TopHeaderComponent />
    <div class="row">
      <ChooseCandidate />
      <div class="col-6" style="padding-left: 100px; padding-top: 100px">
        <div class="back-page">
          <svg
            width="24"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
            /></svg
          ><span> Back</span>
        </div>
        <p class="mt-2" style="font-weight: bold">
          Step 2: Complete the cv: You choose one of the following two ways to
          complete the application
        </p>
        <div class="row mt-5 mb-5">
          <div class="cv-online">
            <img
              src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_desktop_computers.jpg"
              alt=""
            />
            <span style="font-weight: bold">Use Online form</span>
          </div>
          <div class="cv-from-pc">
            <img
              src="https://png.pngtree.com/png-vector/20191030/ourlarge/pngtree-adaptive-computer-mobile-pc-responsive-icon-for-web-png-image_1927634.jpg"
              alt=""
            />
            <span style="font-weight: bold">Upload CV from PC</span>
          </div>
        </div>
        <div class="guide mt-5 p-2">
          <span style="font-weight: bold; color: red">Tutorial:</span>
          <p>
            <span style="font-weight: bold"
              >Create a profile with an online declaration form:</span
            >
            you create all your information for employers to have a basis for
            selection. The more detailed information your job opportunities
            increase
          </p>
          <p>
            <span style="font-weight: bold"
              >Upload your cv from your computer:</span
            >
            you already have your resume ready from your computer, you just need
            to upload your cv and confirm your email to complete the
            registration process.
          </p>
          <p style="font-weight: bold">
            Both profiles are searchable by employers
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseCandidate from "@/components/ChooseCandidate.vue";
import TopHeaderComponent from "@/components/TopHeaderComponent.vue";
export default {
  name: "ChooseCVType",
  components: {
    ChooseCandidate,
    TopHeaderComponent,
  },
};
</script>

<style scoped>
.cv-online {
  background-color: #ffefcf;
  margin-left: 80px;
  height: 150px;
  width: 150px;
  padding: 0;
  border-radius: 10px;
}

.cv-online img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

.cv-online span {
  display: none;
}

.cv-online:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.8s;
}

.cv-online:hover > span {
  display: inline-block;
}

.cv-from-pc {
  background-color: #e1f5ff;
  margin-left: 50px;
  height: 150px;
  width: 150px;
  border-radius: 10px;
}

.cv-from-pc img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

.cv-from-pc span {
  display: none;
}

.cv-from-pc:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.8s;
}

.cv-from-pc:hover > span {
  display: inline-block;
}

.guide {
  width: 577px;
  height: 247px;
  left: 736px;
  top: 490px;
  background: #fbfbff;
  border: 1.5px dashed #b4c6e7;
  border-radius: 20px;
}
</style>