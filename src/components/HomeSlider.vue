<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="slide-1"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-2"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-3"></div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-4"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'HomeSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2400,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
<style lang="scss">
.swiper {
  width: 100% !important;
}
div[class^='slide-'],
div[class*=' slide-'] {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.slide-1 {
  background-image: url('../assets/slides/slide1.png');
}
.slide-2 {
  background-image: url('../assets/slides/slide2.png');
}
.slide-3 {
  background-image: url('../assets/slides/slide3.png');
}
.slide-4 {
  background-image: url('../assets/slides/slide4.png');
}
.swiper-pagination-bullet {
  background: transparent;
  border: 2px solid white;
  height: 1rem;
  width: 1rem;
}
.swiper-container {
  height: 100%;
}
</style>