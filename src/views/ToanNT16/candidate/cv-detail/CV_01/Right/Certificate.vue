<template>
  <div v-if="isGetCvFunction">
    <div :class="{ 'd-none': isHidden }">
      <div class="row">
        <div
          class="col-12 bg-secondary p-2 option-container"
          :class="{ invisible: isHiddenOptions }"
          @mouseover="isHiddenOptions = false"
          @mouseleave="isHiddenOptions = true"
        >
          <i
            class="fa fa-bars py-1 px-2 bg-white rounded mr-1"
            id="move"
            ref="move"
          ></i
          ><i
            class="fa fa-arrow-up py-1 px-2 bg-white rounded mr-1"
            aria-hidden="true"
            id="moveUp"
            ref="moveUp"
          ></i>
          <i
            class="fa fa-arrow-down py-1 px-2 bg-white rounded mr-1"
            aria-hidden="true"
            id="moveDown"
            ref="moveDown"
          ></i>
          <i
            class="fa fa-minus py-1 px-5 bg-danger rounded mr-1"
            aria-hidden="true"
            id="hidden"
            ref="hidden"
            @click="hidden"
            >Ẩn</i
          >
        </div>
      </div>
      <div
        class="row certificate"
        @mouseover="isHiddenOptions = false"
        @mouseleave="isHiddenOptions = true"
      >
        <div class="col-12 text-left px-0">
          <div class="header h4 font-weight-bold pl-3 text-uppercase">
            CHỨNG CHỈ
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-10">
              <div
                v-for="(item, index) in getCV.degrees"
                :key="index"
                @keyup="updateCertificate(index)"
                class="row"
              >
                <div class="col-10">
                  <div
                    ref="certificate"
                    contenteditable="true"
                    class="custom-outline"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Certificate",
  data() {
    return {
      isHidden: false,
      isHiddenOptions: true,
      certificates: [],
    };
  },
  methods: {
    ...mapActions(["setCertificate"]),
    hidden() {
      this.isHidden = !this.isHidden;
    },
    updateCertificate: function (index) {
      const id = this.getCV.degrees[index].id;
      const name = this.$refs["certificate"][index].textContent;

      const certificate = {
        id: id,
        name: name,
      };
      const indexOf = this.certificates.findIndex(
        (ce) => ce.id == certificate.id
      );
      console.log(indexOf);
      if (indexOf == -1) {
        this.certificates.push(certificate);
      } else {
        this.certificates[index] = certificate;
      }

      this.setCertificate({ certificate: this.certificates });
    },
  },
  computed: {
    ...mapGetters(["isGetCvFunction", "getCV"]),
  },
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