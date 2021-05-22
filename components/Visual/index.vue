<template>
  <div class="visual">
    <div id="visual"></div>
    <header class="header">
      <h1 class="header-title">I'm Web developer<br />in Nagoya</h1>
      <div class="sns">
        <!-- <img src="~/assets/insta3.jpg" width="50" height="50" /> -->
      </div>
    </header>
    <div class="visual_main">
      <div class="visual_main_inner">
        <div class="text-wrapper">
          <span class="letters">Y</span>
          <span class="letters">U</span>
          <span class="letters">S</span>
          <span class="letters">H</span>
          <span class="letters">I </span>
          <span class="letters">&nbsp;</span><br>
          <span class="letters">P</span>
          <span class="letters">o</span>
          <span class="letters">r</span>
          <span class="letters">t</span>
          <span class="letters">f</span>
          <span class="letters">o</span>
          <span class="letters">l</span>
          <span class="letters">i</span>
          <span class="letters">o</span>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>
<script>
// particles.jsで降らせる雪の設定を読み込み
import particles from "~/assets/js/particles.js";
import { TweenMax, Expo, Elastic, gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  data() {
    return {};
  },
  mounted() {
    this.loadPage();
  },
  methods: {
    loadPage() {
      const tl = gsap.timeline();
      tl.fromTo(
        ".visual_main_inner",
        { height: "0%", opacity: 0 },
        { height: "80%", ease: Power2.easeInOut, opacity: 1 },
        "up"
      )
        .fromTo(
          ".visual_main_inner",
          { width: "100%" },
          { width: "70%", ease: Power2.easeInOut },
          "up+=0.2"
        )
        .fromTo(
          ".overlay",
          { x: "-100%", opacity: 0 },
          {
            x: "0%",
            ease: Power2.easeInOut,
            opacity: 1,
            onComplete: function () {
              particlesJS("visual", particles.data);
            },
          },
          "up+=0.2"
        )
        .fromTo(
          ".overlay",
          { x: "0%", ease: Power2.easeInOut },
          { x: "100%", ease: Power2.easeInOut, display: "none" },
          "up+=0.6"
        )
        .fromTo(
          ".header-title",
          { opacity: 0, y: -10, opacity: 0 },
          { opacity: 1, y: 0, ease: "back.out(1.7)", opacity: 1 },
          "up+=0.8"
        )
        .fromTo(
          ".sns",
          { opacity: 0, x: 10, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            ease: Power2.easeInOut,
            opacity: 1,
          },
          "up+=0.9"
        )
        .staggerFromTo(
          ".letters",
          0.5,
          { x: "1em", y: "1.2em", rotateZ: 180 },
          {
            x: 0,
            y: 0,
            rotateZ: 0,
            ease: Power2.easeInOut,
          },
          0.05,
          "up+=0.2"
        );
    },
  },
};
</script>
<style>
#visual canvas {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.visual {
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 140px;
}

.header-title {
  font-size: 14px;
  opacity: 0;
}
.sns {
  opacity: 0;
}

.visual_main {
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual_main_inner {
  position: relative;
  opacity: 0;
}

.visual_main_inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-wrapper {
  position: absolute;
  top: 40%;
  left: -10%;
  color: #00c58e;
  font-size: 60px;
  overflow: hidden;
}

.overlay {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #108775;
  z-index: -1;
}

.letters {
  display: inline-block;
}
</style>