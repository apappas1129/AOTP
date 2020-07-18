<template>
  <div class="media-container">
    <div class="media-vid-bg">
      <video autoplay muted loop>
        <source src="../assets/videos/drummer.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="media-wrapper">
      <div class="video-container">
        <iframe
          width="640"
          height="390"
          src="https://www.youtube.com/embed/Z0lk4B3NjO0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-title">
        <p>All Over The Place - Contagious</p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Media",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Media"
  },
  data() {
    return {
      ytList: [
        "https://www.youtube.com/embed/Z0lk4B3NjO0",
        "https://www.youtube.com/embed/0Szuyb3KE2c",
        "https://www.youtube.com/embed/x9v_vA6HKeE",
        "https://www.youtube.com/embed/LgzqL76OmOE"
      ],
      showEmbeds: false,
      isOpaque: false
    };
  },
  computed: {
    ...mapGetters({
      isTimerPlaying: "getIsTimerPlaying"
    })
  },
  methods: {
    revealEmbeds() {
      this.stopPlayingMusic();
      this.showEmbeds = true;
      setTimeout(() => {
        this.isOpaque = true;
      }, 1000);
    },
    ...mapActions(["play"]),
    stopPlayingMusic() {
      if (this.isTimerPlaying) {
        this.play();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  font-family: "Questrial", sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 3.2rem;
  transition: all 0.5s;
  margin-bottom: 0;
  i {
    transform: scale(1.25);
  }
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
  position: relative;
  width: 100%;
  height: 100%;

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
  background-color: black;
}

.media-wrapper {
  width: 100%;
  height: calc(100vh - 80px);
  position: absolute;
  margin: 80px auto 0 auto;
  top: 0;
  right: 0;
  left: 0;
  max-width: 1100px;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.45) 20%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.45) 80%,
    rgba(0, 0, 0, 0) 100%
  );
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
  .that-button {
    display: none;
  }
  .media-wrapper {
    margin-top: 0 !important;
    height: 100vh;
  }

  h2 {
    bottom: 30%;
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
      display: flex;
      flex-basis: 80%;
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
</style>