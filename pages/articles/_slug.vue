<template>
  <div class="page_articles">
    <header class="header">
      <h1 class="header-title">
        <NuxtLink :to="`/`"> I'm Web developer<br />in Nagoya </NuxtLink>
      </h1>
    </header>
    <main class="section_container">
      <article class="page_article_detail">
        <h2>{{ title }}</h2>
        <div class="article_category">
          <span class="category_label" :class="category.id">{{
            category.category
          }}</span>
        </div>
        <p class="article_date">
          {{ $dayjs(publishedAt).locale("ja").format("YYYY年MM月DD日") }}
        </p>
        <div class="article_thumbnail thumbnail_wrap">
          <img v-bind:src="image.url" v-bind:alt="title" />
        </div>
        <div v-html="body"></div>
      </article>
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $microcms,params }) {
    const data = await $microcms.get({
      endpoint: `works/${params.slug}`,
      queries: { limit: 20 },
    });
    return data;
  },
  mounted() {
    require("../../assets/js/bubble.js");
  },
};
</script>