<script>
export default {
  props: {
    cardObj: Object,
  },
  data() {
    return {
      flag: true,
      isPoster: true,
      stars: [],
    };
  },

  methods: {
    getRating(myRating, name) {
      this.stars = [];
      console.log("film/serie ----->", name);
      // Stelle
      const fullStar = "fa-solid fa-star";
      const halfStar = "fa-solid fa-star-half";
      const zeroStar = "fa-regular fa-star";
      let limit = myRating / 2;
      let x = limit;
      if (limit >= 0.5) {
        for (let i = 0; i <= limit; i++) {
          if (x > 0.49 && x < 1) {
            this.stars.push(halfStar);
          } else if (x >= 1) {
            x--;
            this.stars.push(fullStar);
          }
        }
      } else {
        this.stars.push(zeroStar);
      }
      console.log("result->>>>>>>>> ", this.stars);
      return this.stars;
    },
  },
  // mounted() {
  //   this.getRating(cardObj.vote_average);
  // },
};
</script>

<template>
  <!-- FIXME: Sistemare altezza fissa card
              Spacca quando il titolo originale è più lungo-->
  <div class="col-3 my-1">
    <div class="card d-flex flex-column">
      <img
        v-if="isPoster"
        :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`"
        :alt="cardObj.title || cardObj.name"
        @error="isPoster = false"
      />
      <img
        v-else
        src="../../../public/img/404imgnotfound.jpg"
        alt="Img Not Found"
      />
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
      <!-- <p>{{ cardObj.vote_average }}</p> -->
      <p class="d-flex rating">
        <span
          v-for="(element, index) in getRating(
            cardObj.vote_average,
            cardObj.title || cardObj.name
          )"
          :key="index"
        >
          <i :class="element"></i
        ></span>
      </p>
      <p class="desc">{{ cardObj.overview }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss";
@use "../../assets/scss/partials/variables" as *;

.rating {
  span {
    font-size: 0.8rem;
    color: $color-star;
  }
}
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
