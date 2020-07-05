<template>
  <div class="media-container">
    <div class="media-vid-bg">
      <video autoplay muted loop>
        <source src="../assets/videos/drummer.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="media-wrapper">
      <play-btn v-if="!showEmbeds" @click.native="revealEmbeds()" class="that-button"></play-btn>
      <ul v-if="showEmbeds" class="iframes" v-bind:class="{ 'no-opacity': !isOpaque }">
        <li>
          <iframe width="400" height="225" :src="ytList[0]"></iframe>
          <iframe width="400" height="225" :src="ytList[1]"></iframe>
        </li>
        <li>
          <iframe width="400" height="225" :src="ytList[2]"></iframe>
          <iframe width="400" height="225" :src="ytList[3]"></iframe>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCXUVAs6qA9Lq1q2DVqPIsbw">
            <h2>
              <i class="las la-play-circle"></i> Subscribe
            </h2>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PlayBtn from '@/components/PlayBtn'

export default {
  name: 'Media',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Media'
  },
  components: {
    PlayBtn
  },
  data () {
    return {
      ytList: [
        'https://www.youtube.com/embed/Z0lk4B3NjO0',
        'https://www.youtube.com/embed/0Szuyb3KE2c',
        'https://www.youtube.com/embed/x9v_vA6HKeE',
        'https://www.youtube.com/embed/LgzqL76OmOE'
      ],
      showEmbeds: false,
      isOpaque: false
    }
  },
  methods: {
    revealEmbeds () {
      this.showEmbeds = true;
      setTimeout(() => {
        this.isOpaque = true;
      }, 1000);
    }
  }

}
</script>

<style lang="scss" scoped>
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
  font-family: 'Questrial', sans-serif;
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
    color: #c4302b;
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
</style>