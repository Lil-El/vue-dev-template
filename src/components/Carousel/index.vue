<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" id="t">
      <!-- <div class="swiper-slide"></div> -->
    </div>
    <div class="swiper-button-prev" id="prev"></div>
    <div class="swiper-button-next" id="next"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    opts: Object,
    imgs: Array,
  },
  data() {
    return {
      baseOpt: {},
    };
  },
  created() {},
  mounted() {
    for (let i = 0; i < this.imgs.length; i++) {
      let slide = document.createElement("div");
      slide.className = "swiper-slide";
      let img = document.createElement("img");
      img.src = this.imgs[i];
      slide.append(img);
      let wrapper = document.getElementsByClassName("swiper-wrapper")[0];
      wrapper.append(slide);
    }
    let mySwiper = new Swiper(".swiper-container", {
      ...this.baseOpt,
      ...this.opts,
    });
    for (let i = 0; i < mySwiper.pagination.bullets.length; i++) {
      mySwiper.pagination.bullets[i].onmouseover = function () {
        this.click();
      };
    }
  },
};
</script>
<style lang="scss">
#prev {
  left: 40px;
}
#next {
  right: 40px;
}
.swiper-slide {
  img {
    width: inherit;
  }
}
</style>
