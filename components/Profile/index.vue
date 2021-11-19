<template>
  <section class="profile section_container">
    <h2 class="profile_title top_title" id="profile_title">Profile</h2>
    <p class="profile_lead">1998年生まれ。静岡育ち。<br>
      仕事でPHPでシステム作ったり、サイトも作ったりしてます。
    </p>
    <ul class="profile_career">
      <li>
        <h4>HTML / CSS / JavaScript</h4>
        <p>3D表現以外のサイトコーディング、アニメーション実装ができます。フレームワークはVue(Nuxt)とReactを少し。</p>
        <span class="profile_skill">Frontend</span>
      </li>
      <li>
        <h4>PHP / Python</h4>
        <p>仕事でPHP開発、API開発,CMS(ECCUBE,WordPress)のカスタマイズをしています。<br>Python,GASも趣味で書いてます。</p>
        <span class="profile_skill">Backend</span>
      </li>
      <li>
        <h4>技術 / グルメ</h4>
        <p>
          大学時代は名古屋の情報サイトでグルメ記事を書いていました。<br>今はQiitaやポートフォリオサイトに備忘録として技術について書いています。
        </p>
        <span class="profile_skill">Writing</span>
      </li>
    </ul>
  </section>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  data() {
    return {};
  },
  mounted() {
    this.scrollItemA();
  },
  methods: {
    scrollItemA() {
      gsap.to("#profile_title", {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#profile_title",
          start: "right bottom", // アニメーション開始位置
          end: "top 200", // アニメーション終了位置
        },
      });
    },
  },
};
</script>