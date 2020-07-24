<template>
  <div>
    <Carousel :opts="opts" :imgs="imgList" />
    <div class="content center">
      <div class="mod">
        <Title text="产品多样，用户海量" />
      </div>
      <div class="mod">
        <Title text="打造一站式解决方案平台" />
      </div>
      <div class="mod"></div>
      <div class="mod"></div>
    </div>
  </div>
</template>
<script>
import Carousel from "@/components/Carousel";
import Title from "@/components/Title";
export default {
  components: {
    Carousel,
    Title,
  },
  data() {
    this.opts = {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: true,
      },
    };
    return {
      imgList: [
        "https://www.supermap.com/cn/pic/toppic/20205291440151920.jpg",
        "https://www.supermap.com/cn/pic/toppic/202031117946132283854518993921.jpg",
        "https://www.supermap.com/cn/pic/toppic/20203414314pp1.jpg",
        "https://www.supermap.com/cn/images/20190821pc.jpg",
      ],
    };
  },
  created() {},
};
</script>