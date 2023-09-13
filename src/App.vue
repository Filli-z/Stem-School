<script setup>
import Navigation from "@/components/Navigation.vue";
import HomeView from "./components/HomeView.vue";
import sponser from "@/components/sponser.vue";
import TimeLine from "./components/TimeLine.vue";
import footerss from "./components/footerss.vue";
import { RouterLink, RouterView } from "vue-router";
import GalleryVue from "./components/Gallery.vue";
</script>

<template>
  <div>
    <Navigation />
    <HomeView />
    <div class="parallex"></div>
    <TimeLine />
    <div class="parallex2"></div>
    <GalleryVue />
    <sponser />
    <div class="parallex"></div>
    <footerss />
  </div>
</template>
<style>
.parallex {
  /* The image used */
  /* background-image: url("src/assets/images/GroupPictureentoto.jpg"); */
  margin-top: 0px;
  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("src/assets/images/GroupPictureentoto.jpg");
}
.parallex2 {
  margin-top: 0px;
  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("src/assets/images/backimage.jpg");
}
</style>
