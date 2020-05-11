<template>
  <div class="my">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username">
      <h3>{{user.username}}</h3>
    </section>
    <section v-for="blog in blogs" :key="blog.id">
      <div class="item">
        <div class="date">
          <span class="day">{{time(blog.createdAt).day}}</span>
          <span class="month">{{time(blog.createdAt).month}}月</span>
          <span class="year">{{time(blog.createdAt).year}}年</span>
        </div>
        <h3 class="xxx">
          <router-link :to="`/detail/${blog.id}`">
            {{blog.title}}
          </router-link>
        </h3>
        <p>{{blog.description}}</p>
        <div class="action">
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <a href="#" @click="onDelete(blog.id)">删除</a>
        </div>
      </div>
    </section>
    <section class="pagination">
      <a-pagination v-model="page" :total="total" show-less-items @change="onChange"/>
    </section>
  </div>
</template>

<script src="./My.js">


</script>

<style src="./My.less" lang="less">

</style>
