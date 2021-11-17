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
        <div class="pagenation">
          <div v-for="(i,key) in pagenation_num" :key="key"> 
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
<style scoped>
.pagenation {
  display: flex;
}
.pagenation span {
  border-radius: 100%;
  width: 40px;
  text-align: center;
  font-weight: bold;
  transition: 0.3s;
  display: block;
  background: #fff;
}
.pagenation span:hover {
  background: #f79428;
  color: #fff;
}
.pagenation span a {
  display: block;
  padding: 9px 7px 7px;
}
.pagenation span.current {
  background: #f79428;
  color: #fff;
}
</style>
<script>
export default {
  async asyncData({ app, $config, params }) {
    const page = params.p || "1";
    const limit = 3;
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
      pagenation_num: pagenation_num
    };
  },
  mounted() {
    require("../../assets/js/bubble.js");
  },
};
</script>