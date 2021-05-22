<template>
  <div class="works" id="works">
    <h2 class="works_title" id="works_title">Works</h2>
    <ul class="works_list">
      <li v-for="content in contents" :key="content.id">
        <NuxtLink :to="`/works/${content.id}`">
          <h3>{{ content.title }}</h3>
          <img :src="content.image.url" />
          <div class="post" v-html="content.body"></div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    contents: {
      required: true,
    },
  },
};
</script>

<style scoped>
.works {
  padding: 140px;
}
.works_title {
  opacity: 1; 
  transform: none;
}
.works_list {
  position: relative;
  z-index: 99999;
}
.works_list li {
  width: 30%;
}
.works_list li img {
  max-width: 100%;
  display: block;
}
</style>