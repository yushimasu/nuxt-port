<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
export default {
  async asyncData({ $config,app,params }) {
    const { data } = await app.$axios.get(
      `https://yuppies.microcms.io/api/v1/works/${params.slug}`,
      {
        headers: { "X-API-KEY": $config.microcmsAPI },
      }
    )
    console.log(data)
    return data
  }
}
</script>