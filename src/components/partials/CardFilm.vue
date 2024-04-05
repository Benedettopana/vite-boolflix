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
      avvio: true,
      dentro: false,
      fuori: "",
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

    whereIs() {
      if (this.avvio) {
        this.fuori = false;
        this.dentro = !this.dentro;
        this.avvio = false;
      } else {
        this.dentro = !this.dentro;
        this.fuori = !this.fuori;
      }
    },
  },
};
</script>

<template>
  <div class="col-3 my-1 colonna">
    <div
      class="card d-flex flex-column mb-3"
      @mouseenter="whereIs"
      @mouseleave="whereIs"
    >
      <div class="title" :class="{ animationIn: dentro, animationOut: fuori }">
        <h5 class="text-center">{{ cardObj.title || cardObj.name }}</h5>
        <!-- animazione -->
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
          <span class="text-white">Rating: </span>
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
      <img
        v-if="isPoster"
        class="front"
        :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`"
        :alt="cardObj.title || cardObj.name"
        @error="isPoster = false"
      />
      <img
        v-else
        class="front"
        src="../../../public/img/404imgnotfound.jpg"
        alt="Img Not Found"
      />
      <div class="front"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss";
@use "../../assets/scss/partials/variables" as *;

// ENTRO
.colonna .card .title.animationIn {
  height: 100%;
  animation: info-movement 1s;
}
// ESCO
.colonna .card .title.animationOut {
  height: 7%;
  animation: info-movement-out 1s;
}

// .colonna:hover .title {
//   height: 100%;
//
//   animation: info-movement 1s;
//   animation-fill-mode: forwards;
// }
// .colonna:not(:hover) .title {
//   height: 7%;
//
//   animation: info-movement-out 1s;
// }

.card {
  position: relative;
  height: 400px;
  .title {
    background-color: $bg-card-color;
    color: $color-text;
    position: absolute;
    width: 100%;
    height: 7%;
    overflow: hidden;
    top: 0;
    left: 0;
    padding: 2px 5px;
  }
  &:hover .animationOut {
  }
  .front {
    height: 398px;
    // object-fit: contain;
    img {
      // height: 40%;
      object-fit: contain;
      overflow: hidden;
    }
  }

  .info {
    opacity: 0;
    height: 100%;
    color: $color-text;
    display: none;
    position: absolute;
    bottom: 93%;
    left: 0;
    transition: all 2s;
    overflow: hidden;
  }

  .rating {
    span {
      font-size: 0.8rem;
      color: $color-star;
    }
  }
  .flag {
    width: 23px;
  }
  .desc {
    height: 70%;
    scroll-behavior: smooth;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

@keyframes info-movement {
  from {
    height: 7%;
  }

  to {
    height: 100%;
  }
}

@keyframes info-movement-out {
  from {
    height: 100%;
  }

  to {
    height: 7%;
  }
}
</style>
