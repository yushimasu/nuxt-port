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
            <NuxtLink :to="`/articles/${content.id}?page=${current_page}`">
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
        <div class="pagenation">
          <div v-for="(i, key) in pagenation_num" :key="key" class="pagenation_wrap">
            <span v-if="current_page == i" class="current">
              <NuxtLink :to="`/articles/page/${i}`">
                {{ i }}
              </NuxtLink>
            </span>
            <span v-else>
              <NuxtLink :to="`/articles/page/${i}`">
                {{ i }}
              </NuxtLink>
            </span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $config, params }) {
    const page = params.p || "1";
    const limit = 6;
    const { data } = await app.$axios.get(
      `https://yuppies.microcms.io/api/v1/works?limit=${limit}&offset=${
        (page - 1) * limit
      }`,
      { headers: { "X-API-KEY": $config.microAPI } }
    );
    // ページネーション数
    let pagenation_num = Math.ceil(data.totalCount / limit);
    return {
      contents: data.contents,
      current_page: page,
      pagenation_num: pagenation_num,
    };
  },
  mounted() {
    require("../../assets/js/bubble.js");
  },
};
</script>