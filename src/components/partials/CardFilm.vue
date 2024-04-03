<script>
export default {
  props: {
    image: String,
    name: String,
    originalName: String,
    language: String,
    overview: String,
    vote: Number,
  },
};
</script>

<template>
  <div class="col-3 my-1">
    <div class="card d-flex flex-column">
      <!-- <img :src="image" :alt="originalName" /> -->
      <h5>{{ name }}</h5>
      <p>{{ originalName }}</p>
      <p>{{ language }}</p>
      <p>{{ vote }}</p>
      <p>{{ overview }}</p>
    </div>
    <!-- 
  Titolo
  Titolo Originale
  Lingua
  Voto -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss";
@use "../../assets/scss/partials/variables" as *;
</style>
