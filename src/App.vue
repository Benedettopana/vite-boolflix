<script>
import axios from "axios";
import { store } from "./data/store";
// Components
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      axios,
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
  },
  mounted() {
    this.startSrc();
  },
};
</script>

<template>
  <Header @toSearch="startSrc" />
  <Main type="movie" />
  <Main type="tv" />
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
