<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "../assets/TimeLine.css";
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      a: [1, 2, 3, 4, 5, 6, 7, 8],
      imgurls: [],
    };
  },
  setup() {
    return {
      modules: [EffectCoverflow, Autoplay],
    };
  },
};
</script>

<template>
  <div>
    <div class="text-center terxting">
      <h1 class="h1">Gallery</h1>
    </div>
    <div class="gallery" id="Gallery">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :autoplay="true"
        :loop="true"
        :centeredSlides="true"
        :space-between:1="20"
        :initial-slide="5"
        :slidesPerView="3"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(x, index) in imgurls" :key="index"
          ><img :src="x" alt="" /></swiper-slide
        ><swiper-slide />
      </swiper>
    </div>
  </div>
</template>
<style>
#app {
  width: 100%;
}
</style>
<style scoped>
#app {
  height: 100%;
}
.mySwiper {
  width: 300px;
}
.swiper {
  margin-left: 935px;
}
.h1 {
  font-size: 60px;
}
.terxting {
  font-size: 60px;
  padding-top: 7%;
  position: absolute;
  text-align: center;
  left: 44%;
  color: #093145;
}
.swiper-slide-active {
  width: 30%;
  height: 40%;
}
html,
body {
  position: relative;
  height: 100%;
  width: 100%;
}
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  width: 100%;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  margin-right: 10px;
  margin-left: 10px;
  width: 400px;
  height: 500px;
}

.swiper-slide img {
  display: block;
  width: 500px;
}

.gallery {
  width: 90%;
  margin-left: -62%;
  padding-top: 10%;
  margin-right: 5%;
  vertical-align: center;
  align-content: center;
}
</style>
