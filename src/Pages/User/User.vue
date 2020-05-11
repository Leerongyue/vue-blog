<template>
  <div class="user">
    <section class="user-info">
      <img
        class="avatar"
        :src="user.avatar"
        :alt="user.username"
      >
      <h3>{{user.username}}</h3>
    </section>
    <section v-for="blog in blogs" :key="blog.id">
      <div class="item">
        <div class="date">
          <span class="day">{{time(blog.createdAt).day}}</span>
          <span class="month">{{time(blog.createdAt).month}}月</span>
          <span class="year">{{time(blog.createdAt).year}}年</span>
        </div>
        <h3>
          <router-link :to="`/detail/${blog.id}`">
            {{blog.title}}
          </router-link>
        </h3>
        <p>{{blog.description}}</p>
      </div>

    </section>
    <section class="pagination">
      <a-pagination @change="onChange" :total="total" show-less-items v-model="page"/>
    </section>
  </div>
</template>

<script src="./User.js">


</script>

<style src="./User.less" lang="less">
  .pagination {
    display: flex;
    justify-content: center;
  }
</style>
