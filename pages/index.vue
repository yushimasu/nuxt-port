<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">portfolio</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <p>{{ name }}</p>
      <ul class="resultItems">
        <li class="resultItem" v-for="post in results" :key="post.id">
          <a :href="post.permalink"  target="_blank" rel="noopener noreferrer">
            <img :src="post.media_url" class="imgStyle" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      name: "masu",
    };
  },
  async asyncData({ app }) {
    const baseUrl = process.env.BASE_URL;
    const response = await app.$axios.$get(baseUrl);
    return {
      results: response.media.data,
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.imgStyle {
  width: 100%;
  display: block;
}
.resultItems {
  display: flex;
  padding: 0;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto;
}
.resultItem {
  width: 33.3%;
}
ul {
  list-style: none;
}
</style>
