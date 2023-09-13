<template>
  <div>
    <div class="polot">
      <div class="Welcoming">
        <div class="container align-items-center">
          <h1 class="h1">Welcome</h1>
          <div>
            <p class="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu lorem ultrices, aliquam velit id, semper ipsum. Suspendisse
              potenti. Fusce aliquam vulputate nunc ut ullamcorper. Aenean
              tortor metus, dignissim eget luctus eget, accumsan id nisl. Donec
              varius pretium mi eu pharetra. Fusce ut purus in sapien semper
              rhoncus. Sed at urna vitae augue congue porta. Aliquam consectetur
              molestie lacus id scelerisque. Suspendisse nec dui in purus
              vehicula rhoncus.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--  <div class="contain-sliding">-->
    <!--    <swiper-->
    <!--        :autoplay="true"-->
    <!--        :slidesPerView="1"-->
    <!--        :spaceBetween="10"-->
    <!--        :pagination="{-->
    <!--        clickable: true,-->
    <!--      }"-->
    <!--                  :breakpoints="{-->
    <!--        '640': {-->
    <!--          slidesPerView: 2,-->
    <!--          spaceBetween: 20,-->
    <!--        },-->
    <!--        '768': {-->
    <!--          slidesPerView: 4,-->
    <!--          spaceBetween: 40,-->
    <!--        },-->
    <!--        '1024': {-->
    <!--          slidesPerView: 3,-->
    <!--          spaceBetween: 50,-->
    <!--        },-->
    <!--      }"-->
    <!--                  :modules="modules"-->
    <!--                  class="mySwiper">-->
    <!--    <swiper-slide v-for="(i,index) in students" :key="index">-->
    <!--      <div class="card-wrapper swiper-wrapper">-->
    <!--        <div class="card swiper-slide">-->
    <!--          <div class="image-content">-->
    <!--            <span class="overlay"></span>-->

    <!--            <div class="card-image">-->
    <!--              <img src="images/profile4.jpg" alt="" class="card-img">-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="card-content">-->
    <!--            <h2 class="name">{{i.Name}}</h2>-->
    <!--            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>-->
    <!--            <div class="d-flex justify-content-center mt-5">-->
    <!--              <ul class="list-icons">-->
    <!--                <li><a class="link-dark" :href="i.LinkedIn"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">-->
    <!--                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>-->
    <!--                </svg></a></li>-->
    <!--                <li><a class="link-dark" :href="i.Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">-->
    <!--                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>-->
    <!--                </svg></a></li>-->
    <!--                <li><a class="link-dark" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">-->
    <!--                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>-->
    <!--                </svg></a></li>-->
    <!--                <li><a class="link-dark" :href="i.Email"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">-->
    <!--                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>-->
    <!--                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>-->
    <!--                </svg></a></li>-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </swiper-slide>-->
    <!--    </swiper>-->

    <!--    <div class="swiper-button-next swiper-navBtn"></div>-->
    <!--    <div class="swiper-button-prev swiper-navBtn"></div>-->
    <!--    <div class="swiper-pagination"></div>-->
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  /></svg
              ></a>
            </div>
          </div>
          <p class="copyright">Company Name © 2018</p>
        </div>
      </footer>
    </div>
  </div>
</template>
<style>
@import "css/ionicons.min.css";
@import "css/swiper-bundle.min.css";
@import "css/all.min.css";

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 2px;
}
.swiper {
  margin-right: 50px;
  margin-left: 50px;
}
.h1 {
  margin-left: -72px;
  margin-top: 164px;
  font-size: 90px;
}
.p {
  margin-left: -350px;
  margin-top: 367px;
}
.container {
  justify-content: center;
  align-items: center;
}
.align-items-center {
  display: flex;
  align-items: center; /*Aligns vertically center */
  justify-content: center; /*Aligns horizontally center */
}
.polot {
  background-color: dodgerblue;
  width: 100%;
  height: 520px;
}
.Welcoming {
  background-color: dodgerblue;
  width: 100%;
  height: 600px;
  border-radius: 80px;
}
.footer-dark {
  padding: 50px 0;
  margin-top: 1000px;
  color: #f0f9ff;
  background-color: #282d32;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
  .footer-dark .item .social {
    align-items: center;
  }
}
.list-icons li {
  list-style: none;
  border-radius: 10px;
  height: 40px;
  width: 40px;
}
.list-icons li i {
  font-size: 17px;
  color: #fff;
}
@media (max-width: 700px) {
}
.facebook {
  background: #3b5998;
}
.instagram {
  background: #3f729b;
}
.youtube {
  background: #ff0000;
}
.whatsapp {
  background: #4dc247;
}
.pinterest {
  background: #cb2027;
}
.footer-dark .item.text {
  margin-bottom: 36px;
}
.list-icons {
  display: inline-flex;
  height: 10px;
  margin-bottom: 51px;
}
@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 18px;
  width: 36px;
  height: 36px;
  border-style: none;
  border-width: 0;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}
.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
/* Google Fonts - Poppins */
.contain-sliding {
  min-height: 100vh;
  width: 100%;
  margin-top: 100px;

  margin-right: 50px;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
}
.slide-container {
  max-width: 1120px;
  width: 100%;
  padding: 40px 0;
}
.slide-content {
  margin: 0 40px;
  overflow: hidden;
  border-radius: 25px;
}
.card {
  border-radius: 25px;
  background-color: #fff;
}
.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
  color: dimgrey;
}
.image-content {
  position: relative;
  row-gap: 5px;
  padding: 25px 0;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #3a3069;
  border-radius: 25px 25px 0 25px;
}
.overlay::before,
.overlay::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -40px;
  height: 40px;
  width: 40px;
  background-color: #3a3069;
}
.overlay::after {
  border-radius: 0 25px 0 0;
  background-color: #fff;
}
.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: linear-gradient(#1b1029, #5e43e0);
  padding: 3px;
}
.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #6314db;
}
.name {
  font-size: 18px;
  font-weight: 500;
  color: #210f38;
}
.description {
  font-size: 14px;
  color: #084298;
  text-align: center;
}
.button {
  border: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 16px;
  background-color: #4070f4;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background: #265df2;
}

.swiper-navBtn {
  color: #6e93f7;
  transition: color 0.3s ease;
}
.swiper-navBtn:hover {
  color: #4070f4;
}
.swiper-navBtn::before,
.swiper-navBtn::after {
  font-size: 35px;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev {
  left: 0;
}
.swiper-pagination-bullet {
  background-color: #484848;
  opacity: 1;
  margin-bottom: 50px;
}
.swiper-pagination-bullet-active {
  background-color: lightcyan;
  border-color: dimgray;
  border-width: 2px;
}
ul {
  display: inline;
}
@media screen and (max-width: 768px) {
  .slide-content {
    margin: 0 10px;
  }
  .swiper-navBtn {
    display: none;
  }
}
</style>
<script>
import "./js/bootstrap.bundle";
import "./js/swiper-bundle.min";
import "./js/script";
import { Swiper, SwiperSlide } from "swiper/vue";
import "Swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import * as ionicons from "ionicons/icons";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import db from "./js/init";
export default {
  data() {
    return {
      students: [],
    };
  },
  created() {},
  methods: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
