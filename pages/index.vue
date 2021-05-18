<template>
  <div>
    <Visual />
    <Profile />
    <Contact :results="results" />
  </div>
</template>

<script>
import Visual from "~/components/Visual/index.vue";
import Profile from "~/components/Profile/index.vue";
import Contact from "~/components/Contact/index.vue";

export default {
  components: {
    Visual,
    Profile,
    Contact,
  },
  data() {
    return {

    };
  },
  async asyncData({ app }) {
    const baseUrl = process.env.BASE_URL;
    const response = await app.$axios.$get(baseUrl);
    return {
      results: response.media.data,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style>
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
