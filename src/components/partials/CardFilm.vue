<script>
export default {
  props: {
    cardObj: Object,
  },
  data() {
    return {
      flag: true,
    };
  },

  // methods: {
  //   getFlag(myFlag) {
  //     if (this.flag.includes(myFlag)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  // mounted() {
  //   this.getFlag(cardObj.original_language);
  // },
};
</script>

<template>
  <!-- FIXME: Sistemare altezza fissa card
              Spacca quando il titolo originale è più lungo-->
  <div class="col-3 my-1">
    <div class="card d-flex flex-column">
      <!-- <img :src="image" :alt="originalName" /> -->
      <h5>{{ cardObj.title || cardObj.name }}</h5>
      <p>{{ cardObj.original_title || cardObj.original_name }}</p>
      <p>
        <span>Language: </span>
        <img
          v-if="flag"
          :src="`../../../public/img/${cardObj.original_language}.png`"
          :alt="cardObj.original_language"
          class="flag"
          @error="flag = false"
        />
        <span v-else>{{ cardObj.original_language }}</span>
      </p>
      <p>{{ cardObj.vote_average }}</p>
      <p class="desc">{{ cardObj.overview }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss";
@use "../../assets/scss/partials/variables" as *;

.flag {
  width: 32px;
}
.desc {
  height: 200px;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
