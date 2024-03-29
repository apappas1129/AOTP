import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Music from '../views/Music.vue';
import Media from '../views/Media.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/music',
    name: 'Music',
    component: Music,
  },
  {
    path: '/media',
    name: 'Media',
    component: Media,
  },
  {
    path: '/media',
    name: 'Media',
    component: Media,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
