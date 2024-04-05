<script>
import axios from "axios";
import { store } from "./data/store";
// Components
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Hot from "./components/partials/Hot.vue";

export default {
  components: {
    Header,
    Main,
    Hot,
  },
  data() {
    return {
      axios,
      store,
      // hotSwipe,
    };
  },

  methods: {
    getApi(type) {
      axios
        .get(store.apiUrl + type, {
          params: store.queryparams,
        })
        .then((result) => {
          store[type] = result.data.results;
          console.log("risultato ----->", store[type]);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // faccio partire la ricerca
    startSrc() {
      this.getApi("movie");
      this.getApi("tv");
    },

    getHot() {
      axios
        .get(store.apiSwiper, {
          params: store.queryswiper,
        })
        .then((result) => {
          store.hot = result.data.results;
          console.log("hot ----->", store.hot);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.startSrc();
    this.getHot();
  },
};
</script>

<template>
  <Header @toSearch="startSrc" />
  <Hot v-show="store.movie.length == 0 || store.tv.length == 0" />
  <Main v-show="store.movie.length > 0" type="movie" />
  <Main v-show="store.tv.length > 0" type="tv" />
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
