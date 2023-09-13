<script setup xmlns="http://www.w3.org/1999/html">
</script>
<template>
      <div class="container-fluid "> 
        <nav class="navbar fixed-top navbar-expand-sm  ada">
          
        <a id="brand" class="navbar-brand sm-0 h1" style="font-family: cursive">Stem School</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle-navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item loll ">
              <a class="nav-link hover-underline-animation" href="#Home" >Home</a>
            </li>
            <li class="nav-item loll">
              <a class="nav-link hover-underline-animation" href="#timeline">Timeline</a>
            </li>
            <li class="nav-item loll">
              <a class="nav-link hover-underline-animation" href="#Gallery">Gallery</a>
            </li>
            <li class="nav-item loll">
              <a class="nav-link hover-underline-animation" href="#alumni" >Alumni</a>
            </li>
            <li class="nav-item loll ">
              <a class="nav-link hover-underline-animation" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
</template>
<style scoped>
/* .byop{
  margin-top: 1900px;
    position: relative;
    bottom: 0;
    width: 100%;
} */
</style>
<script>
export default {

}
</script>

<style scoped>
body{
  width:100%;
}
nav{
background-color:white ;

}
.ada{
  height: 87px;
}
.loll{
  margin-right: 51px;
}
#brand{
  padding-left: 50px;
  height: 100px;
  padding: 100px;
  width:15%;

}
#navbarNav{
    padding-right: 70px;
    height: 90%;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #6c5e6c;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.llp{
  width: 100%;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>