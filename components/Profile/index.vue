<template>
  <div class="profile">
    <h2 class="profile_title" id="profile_title">Profile</h2>
    <p>1998年生まれ。静岡育ち。</p>
    <p>仕事はPHPでシステム開発してます。好きなのはJavaScript。</p>
    <p>趣味はクイズとサイクリングと食べることです。</p>
    <ul class="profile_career">
      <li>
        <h4>HTML / CSS / JavaScript</h4>
        <p>マークアップが得意です。SCSS、テンプレートエンジン（EJSやPug）などに対応可能。<br>最近はNuxt.jsでSSG、GSAPでアニメーションを実装することにハマってます。</p>
        <span class="profile_skill">Frontend</span>
      </li>
      <li>
        <h4>PHP（WordPress / ECCUBE）</h4>
        <p>PHPの実務経験1年。CMS・既存システムへの機能追加を主に行なっております。<br>LINE APIを利用したアプリ開発やGASやGoogle Data Portalを利用して業務用システムの開発も可能です。
        </p>
        <span class="profile_skill">Backend</span>
      </li>
      <li>
        <h4>技術ブログ / グルメサイト</h4>
        <p>大学時代は名古屋の情報サイトでグルメ記事を書いていました。今はQiitaに備忘録として技術について書いています。</p>
        <span class="profile_skill">Writing</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { TweenMax, Expo, Elastic, gsap } from "gsap";
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
<style>
.profile{ 
  padding: 140px;
}
.profile_career li {
  position: relative;
  padding: 50px 0;
}
.profile_career li p {
  width: 60%;
}
.profile_career h4 {
  font-size: 18px;
  color: #2f495e;
}
.profile_skill {
  position: absolute;
  right: 0;
  bottom: 0;
  color: rgba(0, 197, 142, 0.3);
  font-size: 80px;
  z-index: -1;
}
</style>