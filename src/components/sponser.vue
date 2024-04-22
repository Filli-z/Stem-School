<template>
  <h1
    class="h1"
    style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif"
  >
    Partners
  </h1>
  <div class="sponsor-container">
    <img src="../assets/images/ethiopianairlineslogo.png" alt="Snow" />
    <img src="../assets/images/boing.png" alt="Forest" />
    <img src="../assets/images/thinkyounglogo.jpg" alt="Mountains" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sponsor-container {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: whitesmoke;
}
img {
  width: 150px;
  margin-right: 50px; /* Horizontal Space */
}
h1 {
  text-align: center;
  margin-top: 0%;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  color: #093145;
}
</style>
