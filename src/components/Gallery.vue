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
      imgurls: [
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(1).jpg?alt=media&token=92285d81-9489-4c3e-b91f-b424021631ee",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(10).jpg?alt=media&token=f7ec3f21-911e-4fce-a677-6ca84abae9fb",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(11).jpg?alt=media&token=35f7d53e-0309-43c2-a177-54afc14f9e20",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(12).jpg?alt=media&token=a8173027-9143-4aaf-a91c-0c695747f5f0",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(13).jpg?alt=media&token=5ab9b456-39d9-4c02-a000-c3c583e4e6c0",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(14).jpg?alt=media&token=72efe997-8f72-455d-b23b-7293b7a2dc17",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(15).jpg?alt=media&token=07061ce4-68dd-4b4a-83e9-e3df2ca54b1a",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(16).jpg?alt=media&token=c3c80ef7-fb34-4c77-aa5a-0b4f491d3c77",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(17).jpg?alt=media&token=f1de980b-c9fd-49a5-b761-81a25e28af9f",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(18).jpg?alt=media&token=40be0b4a-44ff-4624-bc49-f2d9b282ed03",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(19).jpg?alt=media&token=a9be1265-561d-4f51-bc46-422af3347f0f",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(2).jpg?alt=media&token=83c90e99-3fcc-44ac-99ba-24386a0a9926",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(20).jpg?alt=media&token=96c0a2fc-ee2e-447c-9afe-7e1caf6ec8d8",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(21).jpg?alt=media&token=e2520cba-3fc8-4141-8d7a-dff613100934",
        "https://firebasestorage.googleapis.com/v0/b/cargooking.appspot.com/o/Images%2FIMG%20(22).jpg?alt=media&token=d70e8a5b-5fbe-4924-93c0-253166bef326",
      ],
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
