<script>
import { store } from "../data/store";
import Card from "./partials/CardFilm.vue";
export default {
  components: {
    Card,
  },
  props: {
    type: String,
  },
  data() {
    return {
      store,
    };
  },

  methods: {},

  computed: {
    title() {
      return this.type === "movie" ? "Film" : "Serie Tv";
    },
  },
};
</script>
<template>
  <main>
    <div class="container-xl my-5 page">
      <h3>{{ title }}</h3>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mt-3"
      >
        <Card v-for="item in store[type]" :key="item.id" :cardObj="item" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
@use "../assets/scss/partials/variables" as *;

main {
  background-color: $bg-body-color;
}
</style>
