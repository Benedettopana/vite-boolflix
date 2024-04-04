<script>
export default {
  props: {
    cardObj: Object,
  },

  methods: {
    // flag(nazione){
    //   if(nazione == it){
    //     // prendo bandiera
    //     return true
    //   }else if(nazione == en){
    //     // bandiera en
    //     return true
    //   }else{
    //     return false
    //   }
    // }
  },
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
        <img
          :src="`../../../public/img/${cardObj.original_language}.png`"
          :alt="cardObj.original_language"
          class="flag"
        />
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
