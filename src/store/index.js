import Vue from 'vue';
import Vuex from 'vuex';
import Player from '@/store/player'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Player,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});