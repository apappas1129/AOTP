<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="nav row" v-bind:class="{ shrink : shrinkNav }">
      <div class="col-sm-2">
        <div class="logo" style="position: relative; display: block;">
          <img src="./assets/aotp-logo.png" alt="aotp" />
        </div>
      </div>
      <div class="col-sm-10 text-right" style="display: inline-table;">
        <ul>
          <li>
            <router-link @click.native="$scrollToTop" to="/">Home</router-link>
          </li>
          <li>
            <router-link @click.native="$scrollToTop" to="/about">About</router-link>
          </li>
          <!-- <li>
            <router-link @click.native="$scrollToTop" to="/news">News</router-link>
          </li>-->
          <li>
            <router-link @click.native="$scrollToTop" to="/music">Music</router-link>
          </li>
          <!-- <li>
            <router-link @click.native="$scrollToTop" to="/media">Lyrics</router-link>
          </li>-->
          <li>
            <router-link @click.native="$scrollToTop" to="/media">Media</router-link>
          </li>
          <li>
            <router-link @click.native="$scrollToTop" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-mobile" v-bind:class="{open: isOpened, 'darkMobileNav' : isMobileNavDark}">
      <i class="las la-bars" v-if="!isOpened" v-on:click="isOpened = !isOpened"></i>
      <div class="text-right nav-items" v-if="isOpened" style="display: inline-table;">
        <i class="las la-times" v-if="isOpened" v-on:click="isOpened = !isOpened"></i>
        <ul>
          <li>
            <router-link @click.native="() => { $scrollToTop(); isOpened = false; }" to="/">Home</router-link>
          </li>
          <li>
            <router-link
              @click.native="() => { $scrollToTop(); isOpened = false; }"
              to="/about"
            >About</router-link>
          </li>
          <!-- <li>
            <router-link @click.native="$scrollToTop" to="/news">News</router-link>
          </li>-->
          <li>
            <router-link
              @click.native="() => { $scrollToTop(); isOpened = false; }"
              to="/music"
            >Music</router-link>
          </li>
          <!-- <li>
            <router-link @click.native="$scrollToTop" to="/media">Lyrics</router-link>
          </li>-->
          <li>
            <router-link
              @click.native="() => { $scrollToTop(); isOpened = false; }"
              to="/media"
            >Media</router-link>
          </li>
          <li class="quick-patch hide">
            <router-link
              @click.native="() => { $scrollToTop(); isOpened = false; }"
              to="/contact"
            >Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
    <toast-player></toast-player>

    <footer id="footer" class="row page-footer">
      <div class="row footer-container col-md-12 justify-content-center">
        <div class="footer-album col-md-4 footer-section-header">
          <div class="footer-section-header">
            <h4>Our Music</h4>
          </div>
          <ul>
            <li>
              <a href="https://smarturl.it/aotpcontagious" target="_blank">Contagious</a>
            </li>
            <li>
              <a href="https://smarturl.it/aotpbackwards" target="_blank">Backwards</a>
            </li>
            <li>
              <a href="https://smarturl.it/aotpEP" target="_blank">All Over The Place</a>
            </li>
          </ul>
        </div>
        <div class="footer-socials col-md-4 social-footer-col">
          <!-- <div class="footer-section-header">
            <h4>More about us</h4>
          </div>-->
          <a v-for="s in socialLinks" :key="s.link" :href="s.link" target="_blank">
            <i :class="s.icon"></i>
          </a>
        </div>
        <div class="footer-contact col-md-4">
          <div class="footer-section-header">
            <h4>Contact Us</h4>
          </div>
          <div class="row col-md-12 contact">
            <p class="row col-md-12 text-left">
              <strong style="margin-bottom: 8px;">For Bookings</strong>
            </p>
            <ul class="col-md-12 text-left">
              <li>
                <strong>Email:</strong>&nbsp;
                <a href="mailto:aotpmusic@gmail.com">aotpmusic@gmail.com</a>
              </li>
              <li>
                <strong>Lorenzo Saga</strong>
              </li>
              <li>
                <p>Phone: +63 926 932 4021</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { SocialLinks as socialLinks } from '@/data';
import ToastPlayer from '@/components/ToastPlayer';

export default {
  name: 'App',
  components: {
    ToastPlayer
  },
  metaInfo: {
    title: 'AOTP Official Website',
    // all titles will be injected into this template
    titleTemplate: 'AOTP Official Website | %s',
    meta: [
      // Primary Meta Tags
      { name: 'og:title', content: 'AOTP Official Website' },
      {
        name: 'og:description',
        content: 'The official website of All Over The Place.'
      },
      // Open Graph / Facebook
      { property: 'og:title', content: 'AOTP Official Website' },
      {
        property: 'og:description',
        content: 'The official website of All Over The Place.'
      },
      { property: 'og:url', content: 'https://www.aotpmusic.com' },
      {
        property: 'og:image',
        content:
          'https://www.aotpmusic.com' +
          require('./assets/mini-gallery/s1-5.jpg')
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'AOTP Music Official Website' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://www.aotpmusic.com' },
      { property: 'twitter:title', content: 'AOTP Official Website' },
      {
        property: 'twitter:description',
        content: 'The official website of All Over The Place.'
      },
      {
        property: 'twitter:image',
        content:
          'https://www.aotpmusic.com' +
          require('./assets/mini-gallery/s1-5.jpg')
      }
    ]
  },
  data() {
    return {
      isOpened: false,
      isPassedSection1: false,
      socialLinks,
      isMobileNavDark: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      if (window.scrollY > 10) {
        this.isPassedSection1 = true;
      } else {
        this.isPassedSection1 = false;
      }
    }
  },
  watch: {
    $route() {
      this.isPassedSection1 = true;
      this.isMobileNavDark = ['About', 'Music', 'Contact'].includes(
        this.$route.name
      );
    }
  },
  computed: {
    shrinkNav() {
      return this.isPassedSection1 || this.$route.name != 'Home';
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
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
#nav {
  height: 3rem;
  transition: all 0.65s ease;
  width: 100%;
  padding: 40px 0;
  top: 0;
  left: 0;
  margin: 0;
  position: fixed;
  z-index: 100;
  pointer-events: none;

  ul {
    position: relative;
    top: -1rem;
    transition: all 0.65s ease;
    margin-right: 10%;

    li {
      padding: 0;
      margin: 0;
      list-style: none;
      display: inline-block;
    }
  }

  a {
    color: white;
    // transition: all 0.65s ease; /** temporarily removed since the previous nav is not transitioning back */
    margin: 0 10px;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
    pointer-events: all;
  }

  a:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  .router-link-exact-active {
    font-weight: bold;
  }
  .logo {
    transition: all 0.65s ease;
    z-index: 12;
    position: relative;
    top: -2.25rem;
    left: -2rem;
    width: 320px;
    img {
      width: 100%;
    }
  }
}
.content {
  margin: 80px auto 0 auto !important;
  max-width: calc(1100px + 3rem);
  padding-top: 1rem;
}

#nav.shrink {
  background-color: rgba(0, 0, 0, 0.92);
  .logo {
    width: 8rem;
    top: -2.5rem;
    left: -2.5rem;
  }
}

.router-link-exact-active {
  padding-bottom: 5px;
  // border-bottom: 3px solid #fff; /**temporarily removed because it's shaking on transition */
}

.page-footer {
  z-index: 900;
  position: relative;
  padding: 0 10% 2% 10%;
  background: #1d1c21;
  h4 {
    color: #fff;
  }
  .footer-container {
    .footer-section-header {
      margin-bottom: 1em;
    }

    .footer-album,
    .footer-socials,
    .footer-contact {
      margin-top: 1rem;
    }

    .footer-album {
      ul {
        padding-left: 0;
        list-style: none;
        li {
          a {
            color: #b1b1b1;
          }
        }
      }
    }
    .footer-socials {
      a {
        padding: 0 5px;
        i {
          border: 2px solid #b7b7b7;
          font-size: 3vh;
          color: #b1b1b1;
          padding: 5px;
        }
      }
    }
    .footer-contact {
      .contact {
        color: #b1b1b1;
      }
      ul {
        list-style: none;
        li {
          a {
            color: #b1b1b1;
          }
          p {
            display: inline;
          }
        }
      }
    }
  }
}

.social-footer-col {
  i {
    margin-bottom: 8px;
  }
}

.darkMobileNav {
  background: black !important;
}

@media only screen and (max-width: 767px) {
  .footer-contact {
    max-width: 350px;
  }
}

@media only screen and (max-height: 590px) {
  .logo {
    width: 8rem !important;
    top: -2.5rem !important;
    left: -2.5rem !important;
  }
}
</style>
