<template>
  <div class="contact" id="contact">
    <h2 class="contact_title" id="contact_title">Contact</h2>
    <ul class="resultItems">
      <li class="resultItem" v-for="post in results" :key="post.id">
        <a :href="post.permalink" target="_blank" rel="noopener noreferrer">
          <img :src="post.media_url" class="imgStyle" />
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.contact {
  padding: 0 140px;
  margin-bottom: 400px;
}

.resultItem {
  opacity: 0;
  transform: translateY(20px);
}
</style>
<script>
import { TweenMax, Expo, Elastic, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  props: {
    // propsを受け取ってやればOk
    results: {
      required: true,
    },
  },
  data() {
    return {
      name: "masu",
    };
  },
  mounted() {
    this.scrollInstaImg();
    this.scrollContact();
  },
  methods: {
    scrollInstaImg() {
      gsap.to(".resultItem", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: "#contact_title",
          start: "right bottom",
          scrub: true,
        },
      });
    },
    scrollContact() {
      gsap.to("#contact_title", {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#contact_title",
          start: "right bottom", // アニメーション開始位置
          end: "top 600", // アニメーション終了位置
          // scrub: true,
          markers: true, // マーカー表示
        },
      });
    },
  },
};
</script>

