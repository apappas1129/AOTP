<template>
  <div style="height: 100%">
    <Tinybox :images="tinyBoxPhotos" :index="tinyBoxIndex" @change="(i) => {tinyBoxIndex = i}" />

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="mini-gallery" v-for="(p, i) in photos" :key="i">
        <div class="hax"></div>
        <div
          class="mini-gallery-photo"
          v-for="(q, j) in p"
          :key="q.path"
          v-bind:style="{
          gridArea : q.gridArea,
          backgroundImage: q.path,
          backgroundPositionY: q.offsetY,
          backgroundPositionX: q.offsetX
        }"
          @click="preview(i, j)"
        ></div>
      </swiper-slide>

      <div v-if="photos.length && photos.length > 1" class="swiper-button-prev" slot="button-prev"></div>
      <div v-if="photos.length && photos.length > 1" class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import Tinybox from "vue-tinybox";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'mini-gallery',
  components: {
    Swiper,
    SwiperSlide,
    Tinybox
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        // loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      tinyBoxIndex: null,
      tinyBoxPhotos: [],
      photos: [
        //slide 3
        [
          {
            path: this.url(require('../assets/mini-gallery/s3-1.jpg')),
            gridArea: '1 / 1 / 5 / 5',
          },
          {
            path: this.url(require('../assets/mini-gallery/s3-2.jpg')),
            gridArea: '1 / 5 / 5 / 7',
          },
          {
            path: this.url(require('../assets/mini-gallery/s3-3.jpg')),
            gridArea: '5 / 1 / 7 / 3',
          },
          {
            path: this.url(require('../assets/mini-gallery/s3-4.jpg')),
            gridArea: '5 / 3 / 7 / 5'
          },
          {
            path: this.url(require('../assets/mini-gallery/s3-5.jpg')),
            gridArea: '5 / 5 / 7 / 7',
          }
        ],
        //slide 1
        [
          {
            path: this.url(require('../assets/mini-gallery/s1-1.jpg')),
            gridArea: '1 / 1 / 7 / 3',
          },
          {
            path: this.url(require('../assets/mini-gallery/s1-2.jpg')),
            gridArea: '1 / 3 / 4 / 5',
            offsetX: '-55px'
          },
          {
            path: this.url(require('../assets/mini-gallery/s1-3.jpg')),
            gridArea: '1 / 5 / 4 / 7',
            offsetX: '-120px'
          },
          {
            path: this.url(require('../assets/mini-gallery/s1-4.jpg')),
            gridArea: '4 / 3 / 7 / 5'
          },
          {
            path: this.url(require('../assets/mini-gallery/s1-5.jpg')),
            gridArea: '4 / 5 / 7 / 7',
            offsetY: '-40px'
          }
        ],
        //slide 2
        [
          {
            path: this.url(require('../assets/mini-gallery/s2-1.jpg')),
            gridArea: '1 / 1 / 4 / 6',
            offsetY: '-85px'
          },
          {
            path: this.url(require('../assets/mini-gallery/s2-2.jpg')),
            gridArea: '1 / 6 / 3 / 7'
          },
          {
            path: this.url(require('../assets/mini-gallery/s2-3.jpg')),
            gridArea: '4 / 1 / 7 / 3'
          },
          {
            path: this.url(require('../assets/mini-gallery/s2-4.jpg')),
            gridArea: '4 / 3 / 7 / 6'
          },
          {
            path: this.url(require('../assets/mini-gallery/s2-5.jpg')),
            gridArea: '3 / 6 / 5 / 7',
            offsetX: '-110px'
          },
          {
            path: this.url(require('../assets/mini-gallery/s2-6.jpg')),
            gridArea: '5 / 6 / 7 / 7',
            offsetY: '-40px'
          }
        ]
      ]
    }
  },
  methods: {
    url (path) {
      return 'url(\'' + path + '\')';
    },
    preview (slideIndex, PhotoIndex) {
      let count = 0;
      for (let index = 0; index <= slideIndex; index++) {
        const slide = this.photos[index];
        if (index < slideIndex) {
          count += slide.length;
        }
        if (index == slideIndex) {
          count += PhotoIndex;
        }
      }
      this.tinyBoxIndex = count;
    }
  },
  mounted () {
    this.tinyBoxPhotos = this.photos.map(slide => slide.map(p => p.path.slice(5, p.path.length - 2))).flat();
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide.mini-gallery {
  height: 530px;
  justify-self: center;
  align-self: center;
  padding-left: 48px;
  padding-right: 48px;
  /**my own 6x6 masonry */
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.swiper-button-prev,
.swiper-button-next {
  font-weight: bold;
  color: #acb8cc;
  transition: all 0.35s;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #532ab9;
}

.mini-gallery-photo {
  background-size: cover;
  border-radius: 3px;
  margin: 4px;
  position: relative;
  background-color: white;
  cursor: pointer;
}

.hax {
  width: calc(100% - 104px);
  position: absolute;
  margin: 0 48px;
  border-radius: 8px;
  height: calc(100% - 8px);
  top: 4px;
  left: 4px;
  background: rgba(50, 88, 130, 0.08);
  box-shadow: rgba(50, 88, 130, 0.32) 3px 2px 35px -5px;
}

.x1 {
  background-image: url('../assets/slides/slide4.png');
}
</style>