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
      <div class="menu row row-cols-2 justify-content-around">
        <div class="col logo">
          <h2 class="text-uppercase">Boolflix</h2>
        </div>
        <div class="col-3">
          <div class="src-Bar d-flex justify-content-between mt-1">
            <input
              class="form-control mx-2"
              type="text"
              placeholder="Select Character"
              v-model="searchQuery"
              @keyup.enter="searchCharacter"
            />
            <div class="btn btn-danger">Search</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss";
@use "../assets/scss/partials/variables.scss" as *;
header {
  .menu {
    height: 50px;
    margin: 0 100px;
    .logo {
      color: $color-logo;
    }

    .src-bar {
      margin-left: 50%;
      display: flex;
      .src {
        width: 20%;
      }
      .btn {
      }
    }
  }
}
</style>
