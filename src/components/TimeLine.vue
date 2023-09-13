<template>
  <div id="timeline">
    <div class="parafin">
      <p class="side-text">
        This is the description of every week that shows how stem students spent
        each week with intensive learning and internship sessions in ethiopian
        airlines avation acadamy. MoreOver they have got an opportunity to have
        a guest speaker through different desplines. Beside this they have got a
        soft skill and digital skills.
      </p>
    </div>
    <div class="texting">
      <h1 class="h1">Timeline</h1>
    </div>
    <div class="sizings">
      <swiper
        :effect="'cards'"
        :autoplay="true"
        :loop="true"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="card cards">
            <img
              src="../assets/images/photo_2023-08-23_15-00-38.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Week One</h5>
              <p class="card-text">
                In the first week of the 2023 stem student’s journey, they
                delved into the exciting world of technology and programming.
                they learned the foundational language of the web, HTML (Hyper
                Text Markup Language), which is essential for structuring web
                content.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="../assets/images/smilegrouppic2.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Week Two</h5>
              <p class="card-text">
                As week 2 rolled in, they delved even deeper into the world of
                technology. They shifted to robotics and the versatile Arduino
                platform. they learned about the exciting potential of robotics,
                exploring how they're shaping the future and revolutionizing
                industries. And with Arduino, they gained the skills to create
                electronic wonders.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="../assets/images/smilegrouppic3.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Week Three</h5>
              <p class="card-text">
                In the third and fourth weeks of their internship program, they
                continued their immersive journey through the world of aviation.
                These weeks not only provided them with exposure to different
                sectors within the industry but also helped them in identifying
                their passions and areas of interest.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="../assets/images/smilegrouppic4.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Week Four</h5>
              <p class="card-text">
                In the third and fourth weeks of their internship program, they
                continued their immersive journey through the world of aviation.
                These weeks not only provided them with exposure to different
                sectors within the industry but also helped them in identifying
                their passions and areas of interest.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="../assets/images/smilegrouppics.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Week Five</h5>
              <p class="card-text">
                In the fifth week they shifted their focus towards developing
                essential 21st century skills. In today's world it is not just
                intelligence and creativity that pave the way for success, but
                also our ability to effectively communicate, collaborate, think
                critically, and bring forth our creativity to solve real-world
                challenges.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="../assets/images/photo_2023-08-23_15-00-38.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Week Six</h5>
              <p class="card-text">
                In the fifth week they shifted their focus towards developing
                essential 21st century skills. In today's world it is not just
                intelligence and creativity that pave the way for success, but
                also our ability to effectively communicate, collaborate, think
                critically, and bring forth our creativity to solve real-world
                challenges.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped>
.sizings {
  padding: 10%;
  margin-top: 10px;
}
.parafin {
  width: 540px;
  margin-top: 260px;
  position: absolute;
  margin-left: 217px;
}

.h1 {
  font-size: 70px;
  text-align: center;
}
.card {
  border-radius: 25px;
  background: #093145;
  box-shadow: 0 1px 2px 0 rgb(199, 185, 185), 0 10px 20px 0 rgb(243, 240, 240);
}
.myswiping {
  box-shadow: 0 1px 2px 0 rgba(134, 120, 120, 0.952),
    0 10px 20px 0 rgb(159, 128, 128);
  background-image: url(../assets/images/photo_2023-08-23_15-00-21.jpg);
  background: fixed;
}
.card-body {
  color: white;
}
.texting {
  position: absolute;
  width: 30%;
  font-size: 60px;
  margin-top: 120px;
  margin-left: 200px;
  color: #093145;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.side-text {
  font-weight: bold;
  font-size: 120%;
  margin-left: 5px;
  color: #093145;
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

import "../assets/TimeLine.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import swiper from "swiper";
import { images } from "ionicons/icons";

export default {
  computed: {
    swiper() {
      return swiper;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      count: 0,
      elemental: ["Abebe", "Kebede", "Alemu", "Samuel"],
    };
  },
  setup() {
    return {
      modules: [EffectCards, Autoplay],
    };
  },
  methods: {
    ces() {
      this.count = this.count + 1;
    },
  },
};
</script>
