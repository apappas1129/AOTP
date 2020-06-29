<template>
  <div id="app" class="container-fluid">
    <div id="nav" class="row" v-bind:class="{ shrink : isPassedSection1 }">
      <div class="col-sm-2">
        <div class="logo">
          <img src="./assets/aotp-logo.png" alt="aotp" />
        </div>
      </div>
      <div class="col-sm-10 text-right" style="display: inline-table;">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/news">News</router-link>
          </li>
          <li>
            <router-link to="/music">Music</router-link>
          </li>
          <li>
            <router-link to="/media">Lyrics</router-link>
          </li>
          <li>
            <router-link to="/media">Media</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  data () {
    return {
      isPassedSection1: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll () {
      window.removeEventListener('scroll', this.updateScroll);
      this.isPassedSection1 = true;
    }
  },
  watch: {
    $route () {
      this.isPassedSection1 = true;
    }
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
#nav {
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
    transition: all 0.65s ease;
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

#nav.shrink {
  background-color: rgba(0, 0, 0, 0.92);
  height: 3rem;
  .logo {
    width: 8rem;
    top: -2.5rem;
    left: -2.5rem;
  }
}
</style>
