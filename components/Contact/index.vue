<template>
  <section class="contact section_container" id="contact">
    <h2 class="contact_title top_title" id="contact_title">Contact</h2>
    <ul class="insta_list">
      <li v-for="post in results" :key="post.id">
        <a :href="post.permalink" target="_blank" rel="noopener noreferrer">
          <img :src="post.media_url" class="imgStyle" />
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
import { gsap } from "gsap";
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
  mounted() {
    this.scrollContact();
  },
  methods: {
    scrollContact() {
      gsap.to("#contact_title", {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#contact_title",
          start: "right bottom", // アニメーション開始位置
          end: "top 600", // アニメーション終了位置
        },
      });
    },
  },
};
</script>

