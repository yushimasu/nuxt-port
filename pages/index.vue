<template>
  <div class="container">
    <div>
      <Logo></Logo>
      <Profile />
      <p class="name">{{ name }}</p>
      <Contact :results="results"></Contact>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
import Profile from '~/components/Profile.vue'
import Contact from '~/components/Contact.vue'
import { TweenMax, Expo, Elastic, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  components: {
    Profile,
    Contact
  },
  data() {
    return {
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
  mounted() {
    this.scrollItemA();
    this.redToBlue();
  },
  methods: {
    scrollItemA() {
      gsap.to(".name", {
        // 動かしたい要素は".a"
        x: 1100, // 右方向に500動く
        duration: 8, // アニメーションは1秒間
        yoyo: true,
        scrollTrigger: {
          trigger: ".name", // 要素".a"がビューポートに入ったときにアニメーション開始
          start: "right 350", // アニメーション開始位置
          end: "top 200", // アニメーション終了位置
          scrub: true, // アニメーションをスクロール位置にリンクさせる
          markers: true, // マーカー表示
        },
      });
    },
    redToBlue() {
      TweenMax.to(".circle", 1, {
        x: 550,
        y: 0,
        backgroundColor: "blue",
        repeat: 4,
        yoyo: true,
      });
    },
  },
};
</script>

<style>
.close_btn{
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
  right: 0;
  top:0;
}
.close_btn::before, .close_btn::after{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #333;
    transform: rotate(45deg);
    transform-origin:0% 50%;
    position: absolute;
    top: 0;
    left: 14%;
}

.close_btn::after{
    transform: rotate(-45deg);
    transform-origin:100% 50%;
    left: auto;
    right: 14%;
}
.popup {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 25%;
  background-color: #fff;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: .6s;
  padding: 16px 24px;
}
.popup.is-show {
  opacity: 1;
  visibility: visible;
}
.popup_inner {
  position: relative;
}
.popup_inner::after {
  content: '';
  clear: both;
  display: block;
}
.popup_word {
  font-size: calc(1.3rem + .06vw);
}
.popup_button {
  font-size: calc(1.3rem + .18vw);
}
@media(max-width: 768px){
 .popup { 
   width: 50%;
  }
}
@media(max-width: 425px){
 .popup { 
   width: 100%;
  }
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
.name {
  margin-top: 500px;
  margin-bottom: 700px;
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
.circle {
  background-color: orangered;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-top:1000px;
}
</style>
