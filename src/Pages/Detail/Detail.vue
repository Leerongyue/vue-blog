<template>
  <div class="detail">
    <section class="user-info">
      <img :src="user.avatar" alt="user.username" title="user.username" class="avatar">
      <h3>{{title}}</h3>
      <p>
        <router-link :to="`/user/${user.id}`" class="link">
          {{user.username}}
        </router-link>
        {{ friendlyDate(createdAt)}}
      </p>
    </section>
    <section class="article" v-html="markdown()"></section>
  </div>
</template>

<script src="./Detail.js">


</script>

<style src="./Detail.less" lang="less">

</style>
