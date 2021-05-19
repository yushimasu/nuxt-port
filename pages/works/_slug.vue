<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>

export default {
  async asyncData({ app,params }) {
    const { data } = await app.$axios.get(
      `https://yuppies.microcms.io/api/v1/works/${params.slug}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { "X-API-KEY": "ff3b2067-ed84-46ac-88ec-39d4896271a0" },
      }
    )
    return data
  }
}
</script>