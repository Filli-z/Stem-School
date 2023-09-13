<template>
  <div>
    <div class="container" id="Home">
      <img src="../assets/images/homepagepicture.jpg" />
    </div>
    <div class="text-container">
      <h1>
        <span class="typing">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
      <p style="font-size: 40px">“</p>
      <p class="paragriphy" style="color: #3c6478">
        "Unlock the door to creativity and innovation in the world of STEM -
        where you become the master of your journey.
      </p>
      <p style="font-size: 40px; position: absolute; padding-left: 110%">”</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      typeValue: "Welcome",
      typeStatus: false,
      displayTextArray: ["Welcome"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
<style scoped>
body {
  width: 100%;
}
.container {
  margin-top: 4%;
}
img {
  width: 100%;
  height: 90vh;
  object-fit: cover;
  opacity: 0.5;
}
.typing {
  color: #093145;
}
.paragriphy {
  color: #3c6478;
}
.text-container {
  top: 20%;
  left: 10%;
  position: absolute;
  width: 40%;
}
h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 90px;
  font-weight: bolder;
}
p {
  color: gray;
  font-size: 20px;
}
.blinking-cursor {
  font-size: 6rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>
