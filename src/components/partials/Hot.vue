<script>
import { store } from "../../data/store";
import Card from "../partials/CardFilm.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import './style.css';
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
  data() {
    return {
      store,
      modules: [FreeMode, Pagination],
    };
  },
  computed: {},
};
</script>
<template>
  <div class="container-fluid hot">
    <h4 class="trending">TRENDING</h4>
    <swiper
      :slidesPerView="6"
      :spaceBetween="30"
      :freeMode="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in store.hot" :key="index">
        <Card class="w-100" :cardObj="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss";
@use "../../assets/scss/partials/variables" as *;

.hot {
  margin-top: 70px;
  .trending {
    margin-left: 20px;
  }
}

.swiper {
  width: 100%;

  // height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  // background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
