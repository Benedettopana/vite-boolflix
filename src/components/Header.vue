<script>
// import axios from "axios";
// Importare store
export default {
  // Creare emits
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row row-cols-2">
        <div class="col logo">
          <h2 class="text-uppercase">Boolflix</h2>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
@use "../assets/scss/partials/variables.scss" as *;

.logo {
  color: $color-logo;
}
</style>
