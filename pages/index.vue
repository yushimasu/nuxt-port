<template>
  <div>
    <Visual />
    <main>
      <Profile />
      <Articles :contents="contents" />
      <Contact :results="results" />
    </main>
  </div>
</template>
<script>
import Visual from "~/components/Visual/index.vue";
import Profile from "~/components/Profile/index.vue";
import Articles from "~/components/Articles/index.vue";
import Contact from "~/components/Contact/index.vue";

export default {
  components: {
    Visual,
    Profile,
    Articles,
    Contact,
  },
  async asyncData({ app, $config }) {
    const response = await app.$axios.$get($config.instaAPI);
    const { data } = await app.axios.get(
      "https://yuppies.microcms.io/api/v1/works?limit=30",
      { headers: { "X-API-KEY": $config.microAPI } }
    );
    return {
      results: response.media.data,
      contents: data.contents,
    };
  },
  mounted() {
    require("../assets/js/bubble.js");
  },
};
</script>
