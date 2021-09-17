<template>
  <div class="visual">
    <header class="header">
      <h1 class="header-title">
        <NuxtLink :to="`/`"> I'm Web developer<br />in Nagoya </NuxtLink>
      </h1>
    </header>
    <div class="visual_main">
      <div class="visual_main_inner">
        <div class="text_wrapper">
          <span class="letters">Y</span>
          <span class="letters">U</span>
          <span class="letters">S</span>
          <span class="letters">H</span>
          <span class="letters">I </span>
          <span class="letters">'</span>
          <span class="letters">s </span>
          <span class="letters">&nbsp;</span><br />
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
  </div>
</template>
<script>
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
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