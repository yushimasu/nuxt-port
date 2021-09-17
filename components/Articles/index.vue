<template>
  <section class="articles section_container" id="articles">
    <h2 class="articles_title top_title" id="articles_title">Articles</h2>
      <ul class="post_list" ref="post_list">
        <li class="resultItem" v-for="content in contents" :key="content.id">
          <NuxtLink :to="`/articles/${content.id}`">
            <span>
              <img :src="content.image.url" />
            </span>
            <h3 class="post_title">{{ content.title }}</h3>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink :to="`/articles`" class="post_link">
        <span> 記事一覧へ </span>
      </NuxtLink>
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
    contents: {
      required: true,
    },
  },
  mounted() {
    this.scrollArticlesList();
  },

  methods: {
    scrollArticlesList() {
      gsap.to(".resultItem", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: {
          each: 1,
        },
        scrollTrigger: {
          trigger: "#articles_title",
          start: "center center",
          scrub: true,
        },
      });
    },
  },
};
</script>
