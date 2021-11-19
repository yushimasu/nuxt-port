<template>
  <div class="page_articles">
    <header class="header">
      <h1 class="header-title">
        <NuxtLink :to="`/`"> I'm Web developer<br />in Nagoya </NuxtLink>
      </h1>
    </header>
    <main class="section_container">
      <article class="page_article_detail">
        <h2>{{ article.title }}</h2>
        <div class="article_category">
          <span class="category_label" :class="article.category.id">{{
            article.category.category
          }}</span>
        </div>
        <p class="article_date">
          {{ $dayjs(article.publishedAt).locale("ja").format("YYYY年MM月DD日") }}
        </p>
        <div class="article_thumbnail thumbnail_wrap">
          <img v-bind:src="article.image.url" v-bind:alt="article.title" />
        </div>
        <div class="article_content" v-html="article.body"></div>
        <NuxtLink :to="`/articles/page/${$route.query.page}`" class="page_back"
          >記事一覧に戻る</NuxtLink
        >
      </article>
    </main>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `${this.article.title} | YUSHI MASUDA PORTFOLIO`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.title + 'のまとめ',
        },
      ],
    };
  },
  async asyncData({ app, $config, params }) {
    const { data } = await app.$axios.get(
      `https://yuppies.microcms.io/api/v1/works/${params.slug}`,
      {
        headers: { "X-API-KEY": $config.microAPI },
      }
    );
    return {
      article: data
    };
  },
  mounted() {
    require("../../assets/js/bubble.js");
  },
};
</script>