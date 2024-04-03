<script>
import { store } from "../data/store";
import Card from "./partials/CardFilm.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <main>
    <div class="container-xl my-5">
      <h3>Film</h3>
      <!-- <Card 
      :image=""
      :name=""
      :originalName=""
      :language=""
      :vote=""
      /> -->
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mt-3"
      >
        <Card
          v-for="item in store.filmList"
          :key="item.id"
          :image="item.image"
          :name="item.name"
          :originalName="item.original_title"
          :language="item.original_language"
          :overview="item.overview"
          :vote="item.vote_average"
        />
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
