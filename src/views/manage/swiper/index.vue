<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>预览轮播图</span>
      </div>
      <el-carousel :interval="3000" type="card" :loop="false">
        <el-carousel-item v-for="img in imgList" :key="img">
          <img :src="img">
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>配置图片</span>
        <el-button type="primary" size="small">添加</el-button>
      </div>
      <swiper-table />
    </el-card>
  </div>
</template>
<script>
import Swiper from 'swiper'
import SwiperTable from './components/swiperTable'
import 'swiper/css/swiper.css'
export default {
  components: { SwiperTable },
  data() {
    this.opts = {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
    return {
      imgList: [
        'https://www.supermap.com/cn/pic/toppic/20205291440151920.jpg',
        'https://www.supermap.com/cn/pic/toppic/202031117946132283854518993921.jpg',
        'https://www.supermap.com/cn/pic/toppic/20203414314pp1.jpg',
        'https://www.supermap.com/cn/images/20190821pc.jpg'
      ]
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.el-carousel__item {
  height: auto;
  img {
    width: 100%;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.box-card {
  margin-bottom: 20px;
}
</style>
