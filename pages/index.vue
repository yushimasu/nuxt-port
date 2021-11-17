<template>
  <div>
    <Visual />
    <main>
      <Profile />
      <Articles :contents="contents" />
    </main>
  </div>
</template>
<script>
import Visual from "~/components/Visual/index.vue";
import Profile from "~/components/Profile/index.vue";
import Articles from "~/components/Articles/index.vue";

export default {
  components: {
    Visual,
    Profile,
    Articles,
  },
  async asyncData({ app, $config }) {
    const limit = 3;
    const {data} = await app.$axios.get(
      `https://yuppies.microcms.io/api/v1/works?limit=${limit}`,
      { headers: { "X-API-KEY": $config.microAPI } }
    );
    return {
      contents: data.contents,
    };
  },
  mounted() {
    require("../assets/js/bubble.js");
  },
};
</script>
