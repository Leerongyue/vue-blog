<template>
  <div class="detail">
    <section class="user-info">
      <img src="../../assets/1.png" alt="" class="avatar">
      <h3>前端异步大揭秘</h3>
      <p>
        <router-link to="/user">若愚</router-link>
        发布于三天前
      </p>
    </section>
    <section class="article">

      <h1 id="css-网格布局学习指南">CSS 网格布局学习指南</h1>
      <p>
        CSS 网格布局(Grid Layout) 是CSS中最强大的布局系统。
        这是一个二维系统，这意味着它可以同时处理列和行，不像
        <a
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          target="_blank"
        >flexbox</a
        >
        那样主要是一维系统。
        你可以通过将CSS规则应用于父元素（成为网格容器）和该元素的子元素（网格元素），来使用网格布局。
      </p>
      <p>
        要为网格中的所有grid items 统一设置对齐方式，也可以通过 align-items
        属性在网格容器上设置此行为。
      </p>
    </section>
  </div>
</template>

<script src="./Detail.js">


</script>

<style src="./Detail.less" lang="less">

</style>
