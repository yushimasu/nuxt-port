<template>
  <div>
    <ul class="works_list">
      <li v-for="content in contents" :key="content.id">
        <h3>{{ content.title }}</h3>
        <img :src="content.image.url" />
        <div class="post" v-html="content.body"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default ({
  props: {
    contents: {
      required: true,
    },
  },
})
</script>

<style scoped>
.works_list li{
  width: 30%;
}
.works_list li img{
  max-width: 100%;
  display: block;
}
</style>