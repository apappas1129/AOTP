<template>
  <div class="media-container">
    <section class="media-wrapper">
      <div class="video-container">
        <div
          v-if="!isPlayingVid"
          v-bind:style="{
            backgroundImage : url(currentYt.lg_thumbnail || currentYt.thumbnail),
            backgroundPositionY: currentYt.lg_offsetY,
            backgroundSize: currentYt.lg_backgroundSize || 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: currentYt.lg_backgroundPosition,
            backgroundColor: currentYt.lg_bgColor || 'black'
          }"
          class="vid-cover"
        >
          <play-btn @clixxx="playVideo()"></play-btn>
        </div>
        <iframe
          v-if="currentYt && isPlayingVid"
          width="640"
          height="390"
          :src="currentYt.link + '?autoplay=1'"
          frameborder="0"
          allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          name="alex"
        ></iframe>
      </div>
      <a href="#">
        <h2>{{currentYt ? currentYt.title : '' }}</h2>
      </a>
    </section>
    <section class="yt-l-contain">
      <div class="yt-list">
        <div
          v-for="(y, i) in ytList"
          v-bind:key="i"
          v-bind:class="{ active : currentYt == y }"
          v-bind:style="{
            backgroundImage : url(y.thumbnail),
            backgroundSize: 'cover'
          }"
          @click="view(y)"
          class="yt-thumb"
        ></div>
      </div>
    </section>

    <div class="media-vid-bg">
      <video autoplay muted loop>
        <source src="../assets/videos/drummer.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import PlayBtn from '@/components/PlayBtn.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Media',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Media'
  },
  components: {
    PlayBtn
  },
  data() {
    return {
      ytList: [
        {
          thumbnail: require('../assets/media-thumbs/someone-else.jpg'),
          lg_thumbnail: require('../assets/media-thumbs/someone-else.jpg'),
          lg_offsetY: '35%',
          lg_offsetX: null,
          link: 'https://www.youtube.com/watch?v=52KIEMYfKpk',
          title: 'Someone Else'
        },
        {
          thumbnail: require('../assets/album-covers/contagious.png'),
          link: 'https://www.youtube.com/embed/Z0lk4B3NjO0',
          title: 'Contagious',
          lg_backgroundPosition: 'center',
          lg_backgroundSize: 'contain'
        },
        {
          thumbnail: require('../assets/album-covers/backwards.png'),
          link: 'https://www.youtube.com/embed/0IR3q7rxiDE',
          title: 'Backwards',
          lg_backgroundPosition: 'center',
          lg_backgroundSize: 'contain'
        },
        {
          thumbnail: require('../assets/album-covers/aotp.png'),
          link: 'https://www.youtube.com/embed/iSsVGuzQRHo',
          title: 'Away',
          lg_backgroundPosition: 'center',
          lg_backgroundSize: 'contain'
        },
        {
          thumbnail: require('../assets/album-covers/aotp.png'),
          link: 'https://www.youtube.com/embed/JA7HRPeezfo',
          title: 'Fear',
          lg_backgroundPosition: 'center',
          lg_backgroundSize: 'contain'
        },
        {
          thumbnail: require('../assets/album-covers/aotp.png'),
          link: 'https://www.youtube.com/embed/LgzqL76OmOE',
          title: 'Over You',
          lg_backgroundPosition: 'center',
          lg_backgroundSize: 'contain'
        },
        {
          thumbnail: require('../assets/album-covers/aotp.png'),
          link: 'https://www.youtube.com/embed/0JlCwEjFq2o',
          title: 'Stand',
          lg_backgroundPosition: 'center',
          lg_backgroundSize: 'contain'
        },
        {
          thumbnail: require('../assets/album-covers/aotp.png'),
          link: 'https://www.youtube.com/embed/qw9YBsFaSDU',
          title: 'No Pressure',
          lg_backgroundPosition: 'center',
          lg_backgroundSize: 'contain'
        }
      ],
      currentYt: 0,
      isPlayingVid: false
    };
  },
  created() {
    this.currentYt = this.ytList[0];
  },
  computed: {
    ...mapGetters({
      isTimerPlaying: 'getIsTimerPlaying'
    })
  },
  methods: {
    url(src) {
      return "url('" + src + "')";
    },
    view(vid) {
      this.isPlayingVid = false;
      this.currentYt = vid;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    playVideo() {
      this.stopPlayingMusic();
      this.isPlayingVid = true;
    },
    ...mapActions(['play']),
    stopPlayingMusic() {
      if (this.isTimerPlaying) {
        this.play();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.yt-l-contain {
  position: relative;
  z-index: 2;
  max-height: 90vh;
  min-height: 200px;
  .yt-list {
    max-height: calc(100% - 2rem);
    overflow-y: auto;
    left: 0;
    right: 0;
    text-align: 0;
    max-width: 1164px;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    max-width: 90%;
    margin: 1rem auto;
    justify-content: center;
    .yt-thumb {
      flex-grow: 1;
      min-height: 150px;
      min-width: 150px;
      max-width: 150px;
      margin: 8px;
      opacity: 0.8;
      transition: all 0.3s ease-in;
      cursor: pointer;
    }

    .yt-thumb.active,
    .yt-thumb:hover {
      opacity: 1;
    }
  }
  .yt-thumbnail {
    display: none;
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    left: calc(50% - 4rem);
    bottom: calc(40% + 60px);
    position: absolute;
    background-image: url(../assets/mini-gallery/s1-5.jpg);
    background-size: cover;
    background-position-y: -20px;
    cursor: pointer;
  }
}

ul.iframes.no-opacity {
  opacity: 0 !important;
  li {
    opacity: 0 !important;
  }
}

ul.iframes {
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  transition: all 0.6s ease-in;
  transition-delay: 1.4s;
}

h2 {
  font-weight: bold;
  font-size: 3.2rem;
  transition: all 0.5s;
  margin-bottom: 0;
  margin-top: 2rem;
  i {
    transform: scale(1.25);
  }
  color: white;
}

a:hover {
  color: #c4302b;
  text-decoration: none;
  h2 {
    color: #c4302b !important;
  }
}

.media-vid-bg {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  top: 0;

  video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.media-container {
  width: 100%;
  height: 100vh;
  background: transparent;
}

.vid-cover {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 101%;
}
.media-wrapper {
  z-index: 4;
  width: 100%;
  height: calc(100vh - 80px);
  position: absolute;
  margin: 80px auto 0 auto;
  top: 0;
  right: 0;
  left: 0;
  max-width: 1100px;
  // background-image: linear-gradient(
  //   90deg,
  //   rgba(0, 0, 0, 0) 0%,
  //   rgba(0, 0, 0, 0.45) 20%,
  //   rgba(0, 0, 0, 0.6) 50%,
  //   rgba(0, 0, 0, 0.45) 80%,
  //   rgba(0, 0, 0, 0) 100%
  // );
}

iframe {
  border: none;
  border-radius: 8px;
  margin: 4px;
}

@media only screen and (max-width: 820px) {
  ul.iframes {
    display: none;
  }
}

@media only screen and (max-width: 790px) {
  .media-wrapper {
    height: 70vh;
  }

  @media only screen and (min-height: 570px) {
    .yt-l-contain {
      margin-top: -6rem;
    }
  }

  @media only screen and (min-height: 800px) {
    .yt-l-contain {
      margin-top: -12rem;
      height: 40vh;
    }
  }

  .that-button {
    display: none;
  }
  .media-wrapper {
    margin-top: 0 !important;
    height: 100vh;
  }

  h2 {
    display: none;
  }
  .yt-thumbnail {
    display: block;
  }
}

.media-container {
  height: auto;
  .media-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 25px;
    .video-container {
      min-height: 224px;
      display: flex;
      flex-basis: 80%;
      position: relative;
      iframe {
        // position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }
    .video-title {
      font-size: 40px;
      font-weight: bold;
      text-align: left;
      color: #fff;
    }
  }
}

@media only screen and (max-width: 558px) {
  .media-wrapper {
    height: 40vh;
  }

  @media only screen and (min-height: 200px) {
    .yt-l-contain {
      margin-top: -4rem;
      height: 60vh;
    }
  }
}
</style>
