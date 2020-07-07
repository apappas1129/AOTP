<template>
  <div class="row music-page">
    <h1>our music</h1>
    <div class="music-list-container">
      <div class="music-list" v-for="(p, i) in playlist" v-bind:key="i">
        <div class="album-thumbnail">
          <div class="player-cover__item" v-bind:style="{ backgroundImage: url(p.cover) }"></div>
        </div>
        <div class="music-story">
          <h3>{{ p.name }}</h3>
          <p style="margin-bottom: 1rem;">
            <i v-if="p.story_quote">{{p.story_quote}}</i>
            {{ p.story }}
          </p>
          <div class="listen">
            <a v-if="p.spotify" :href="p.spotify" target="_blank">
              <button class="btn-spotify">
                <span class="btn-text">
                  <i class="btn-icon lab la-spotify"></i>Listen on Spotify
                </span>
              </button>
            </a>
            <a v-if="p.appleMusic" :href="p.appleMusic" target="_blank">
              <button :href="p.appleMusic" class="btn-applemusic player-cover__item">
                <span class="btn-text">
                  <i class="btn-icon lab la-itunes-note"></i>Listen on Apple Music
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="music-swipe-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(p, i) in playlist" v-bind:key="i">
          <div class="music-slide">
            <div class="album-thumbnail">
              <div class="player-cover__item" v-bind:style="{ backgroundImage: url(p.cover) }"></div>
            </div>
            <h3>{{ p.name }}</h3>
            <p v-if="p.story !== 'Coming soon.'">
              <i v-if="p.story_quote">{{p.story_quote}}</i>
              {{ p.story }}
            </p>
            <span v-if="p.story === 'Coming soon.'">{{ p.story }}</span>
            <div class="music-tray2">
              <a v-if="p.spotify" :href="p.spotify" target="_blank">
                <button class="btn-spotify">
                  <span class="btn-text">
                    <i class="btn-icon lab la-spotify"></i>Listen on Spotify
                  </span>
                </button>
              </a>
              <a v-if="p.appleMusic" :href="p.appleMusic" target="_blank">
                <button :href="p.appleMusic" class="btn-applemusic player-cover__item">
                  <span class="btn-text">
                    <i class="btn-icon lab la-itunes-note"></i>Listen on Apple Music
                  </span>
                </button>
              </a>
            </div>
          </div>
        </swiper-slide>
        <div id="music-pagination" class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { PlayList as playlist } from '@/data';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'Music',
  components: {
    Swiper,
    SwiperSlide
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Our Music'
  },
  data() {
    return {
      playlist,
      swiperOption: {
        autoplay: {
          delay: 2400,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    };
  },
  methods: {
    url(path) {
      return `url('${path}')`;
    }
  }
};
</script>

<style lang="scss">
.music-page {
  margin: 80px auto 0 auto !important;
  max-width: calc(1100px + 3rem);
  padding-top: 1rem;
  .music-list-container {
    padding-left: 3rem;
    overflow-x: hidden;
    padding-top: 1rem;
    .music-list {
      position: relative;
      display: flex;
      flex-direction: row;
      margin-bottom: 2.8rem;

      .music-story {
        text-align: left;
        padding: 0 3rem;
      }
    }
  }
  .music-swipe-container {
    display: none;
    width: 100%;

    .music-tray2 {
      margin-bottom: 1rem;
      button {
        margin-bottom: 1rem;
      }
    }

    .music-slide {
      justify-self: center;
      align-items: center;
      display: flex;
      flex-direction: column;

      p,
      h3 {
        padding: 1rem;
      }

      p {
        text-align: left;
        text-indent: 2em;
        margin-bottom: 0;
      }

      h3 {
        margin: 0;
        padding-bottom: 0;
      }
    }

    .swiper {
      width: 100% !important;
    }
    div[class^='slide-'],
    div[class*=' slide-'] {
      width: 100%;
      height: 100%;
    }

    .swiper-container {
      height: 100%;
    }

    .swiper-slide {
      min-height: calc(100vh - 90px);
      width: 100% important;
      padding: 1rem;
    }

    .swiper-pagination-bullet {
      background: transparent;
      border: 2px solid #333 !important;
      height: 1rem;
      width: 1rem;
    }
  }

  .album-thumbnail {
    position: relative;
    height: 224px;
    min-width: 224px;
    max-width: 224px;
    .player-cover__item {
      transition: box-shadow 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
        transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
        z-index 0s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }
    .player-cover__item:hover {
      transform: scale(1.05);
    }

    .player-cover__item:before,
    .player-cover__item:after {
      transition: box-shadow 0.2s ease, transform 0.2s ease,
        z-index 0s 0.2s ease;
      box-sizing: border-box;
      box-shadow: 0 0 0 1px rgba(76, 70, 124, 0.5);
    }
    .player-cover__item:hover:before {
      content: '';
      background: inherit;
      width: 100%;
      height: 100%;
      box-shadow: 3px 3px 8px 0px rgba(76, 70, 124, 0.5);
      display: block;
      z-index: 1;
      position: absolute;
      top: 30px;
      transform: scale(0.9);
      filter: blur(10px);
      opacity: 0.9;
      border-radius: 8px;
    }
    .player-cover__item:hover:after {
      content: '';
      background: inherit;
      width: 100%;
      height: 100%;
      box-shadow: 3px 3px 8px 0px rgba(76, 70, 124, 0.5);
      display: block;
      z-index: 2;
      position: absolute;
      border-radius: 8px;
    }
  }

  h1 {
    font-size: 3rem;
    padding-left: 3rem;
  }

  h1,
  h2,
  h3 {
    font-weight: bolder;
    font-family: 'Questrial', sans-serif;
    font-style: normal;
    letter-spacing: 4px;
    color: #333;
  }

  .btn-spotify,
  .btn-applemusic {
    position: relative;
    padding: 4px 24px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: white;
    background: none;
    border: none;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    transition: 0.1s cubic-bezier(0.215, 0.61, 0.355, 1); //ease-out-cubic
    border-radius: 25px;
    align-items: center;
    margin-right: 1.4rem;

    .btn-text {
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      transition: 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .btn-text {
      transition-delay: 0.05s;
    }

    .btn-icon {
      font-size: 32px;
      transition-delay: 0.1s;
    }
  }

  .btn-spotify {
    --btn-color: #22c95c;
    background: var(--btn-color);
    filter: drop-shadow(0 2px 8px rgba(#22c95c, 0.32));
  }

  .btn-spotify:hover,
  .btn-applemusic:hover {
    transform: scale(1.1);
    .btn-text {
      transform: scale(1.05);
    }
  }

  .btn-applemusic {
    background-image: linear-gradient(
      -45deg,
      #74aeff 0%,
      #8b9fe8 20%,
      #e681d8 42%,
      #ffa9a4 100%
    );
    filter: drop-shadow(0 2px 8px rgba(#86b9ff, 0.42));
  }
}

@media only screen and (max-width: 847px) and (min-width: 791px) {
  .music-page {
    .listen {
      position: absolute;
      left: 20%;
    }

    .music-list {
      padding-top: 2.8rem;
    }

    .music-list:first-of-type {
      padding-top: 0;
    }

    .music-list-container {
      padding-bottom: 1rem;
    }

    p {
      min-height: 192px;
      font-size: 14px;
    }
  }
}

@media only screen and (max-width: 790px) {
  .music-page {
    margin-top: 0 !important;
  }
  .music-list-container {
    display: none;
  }

  .music-swipe-container {
    display: block !important;
  }
}

@media only screen and (min-height: 770px) and (min-width: 610px)  {
  .music-page {
    p {
      margin: 0 4.5rem;
    }
  }
}
</style>