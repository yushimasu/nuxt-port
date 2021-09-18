<template>
  <div class="page_articles">
    <header class="header">
      <h1 class="header-title">
        <NuxtLink :to="`/`"> I'm Web developer<br />in Nagoya </NuxtLink>
      </h1>
    </header>
    <main class="section_container">
      <section class="page_articles_section">
        <h2>Articles</h2>
        <div class="articles_list">
          <article v-for="content in contents" :key="content.id">
            <NuxtLink :to="`/articles/${content.id}`">
              <div class="articles_thumbnail thumbnail_wrap">
                <img :src="content.image.url" />
              </div>
              <div class="articles_detail">
                <p class="articles_date">
                  {{
                    $dayjs(content.publishedAt)
                      .locale("ja")
                      .format("YYYY年MM月DD日")
                  }}
                </p>
                <h3>{{ content.title }}</h3>
                <div class="articles_category">
                  <span class="category_label" :class="content.category.id">{{
                    content.category.category
                  }}</span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: "works",
      queries: { limit: 20 },
    });
    console.log(data);
    return {
      contents: data.contents,
    };
  },
  mounted() {
    require("../../assets/js/bubble.js");
  },
};
</script>