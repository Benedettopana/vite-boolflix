<script>
// import axios from "axios";
// Importare store
import { store } from "../data/store";
export default {
  // Creare emits
  data() {
    return {
      store,
      src: "",
    };
  },
  methods: {},
};
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="menu row row-cols-1 row-cols-sm-2 justify-content-sm-around">
        <div class="col logo">
          <h2 class="text-uppercase">Boolflix</h2>
        </div>
        <div class="col">
          <div class="src-bar d-flex justify-content-between mt-1">
            <input
              class="form-control mx-2"
              type="text"
              placeholder="Search"
              v-model.trim="store.queryparams.query"
              @keyup.enter="$emit('toSearch')"
            />
            <div class="btn btn-danger" @click="$emit('toSearch')">Cerca</div>
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
    }
  }
}
</style>
