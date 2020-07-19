<template>
  <swiper class="swiper events-wrap event-posters" :options="swiperOption">
    <swiper-slide
      v-for="event in events"
      v-bind:key="event.poster"
      v-bind:style="{
          backgroundImage: url(event.poster),
          backgroundSize: event.backgroundSize,
          backgroundColor: event.backgroundColor
          }"
      class="poster"
    ></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Events as events } from '@/data';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'events-swiper',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      events,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    };
  },
  methods: {
    url(path) {
      return "url('" + path + "')";
    }
  }
};
</script>

<style lang="scss">
.events-wrap {
  margin: 1rem auto;
  max-width: 90%;
  margin-bottom: 0;
}

.event-posters {
  background: black;
  .poster {
    margin: 5px 2.5px 1rem 2.5px !important;
    /**40x27 ratio */
    min-height: 564px;
    min-width: 372.7px;
    max-height: 564px;
    max-width: 372.7px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
  }

  @media only screen and (max-width: 1148px) {
    .poster {
      /**40x27 ratio */
      min-width: calc((50vh - 40px) * 0.675);
      min-height: calc(50vh - 40px);
      max-width: calc((50vh - 40px) * 0.675);
      max-height: calc(50vh - 40px);
    }
  }
}

@media only screen and (max-width: 900px) {
  .event-posters {
    justify-content: space-evenly;

    .poster {
      min-width: calc((60vh) * 0.675);
      min-height: calc(60vh);
        max-width: calc((60vh) * 0.675);
      max-height: calc(60vh);
    }
  }
}

@media only screen and (max-width: 702px) {
  .event-posters {
    .poster {
      min-width: 270px;
      min-height: 400px;
      max-width: 270px;
      max-height: 400px;
    }
  }
}

@media only screen and (max-width: 560px) {
  .event-posters {
    .poster {
      min-width: calc((35vh) * 0.675);
      min-height: calc(35vh);
      max-width: calc((35vh) * 0.675);
      max-height: calc(35vh);
    }
  }
}

@media only screen and (max-width: 360px) {
  .event-posters {
    .poster {
      min-width: calc((28vh) * 0.675);
      min-height: calc(28vh);
      max-width: calc((28vh) * 0.675);
      max-height: calc(28vh);
    }
  }
}

@media only screen and (max-width: 320px) {
  .event-posters {
    .poster {
      min-width: calc((33vh) * 0.675);
      min-height: calc(33vh);
      max-width: calc((33vh) * 0.675);
      max-height: calc(33vh);
    }
  }
}
</style>