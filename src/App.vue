<script>
import axios from "axios";
// Components
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      axios,
    };
  },
};
</script>

<template>
  <div>
    <h1></h1>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

h1 {
  font-weight: 800;
  color: red;
}
</style>
