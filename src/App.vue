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
    getApi() {
      axios
        .get(store.apiUrl, {
          params: store.queryparams,
        })
        .then((result) => {
          store.filmList = result.data.results;
          console.log("risultato ----->", store.filmList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <Header @src="getApi" />
  <Main />
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
