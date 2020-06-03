<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item" v-for="blog in blogs " :key="blog.id">
        <figure class="avatar">
          <router-link :to='`/user/${blog.user.id}`'>
            <img :src="blog.user.avatar" alt="blog.user.username">
            <figcaption>{{blog.user.username}}</figcaption>
          </router-link>
        </figure>
        <h3>
          <router-link :to="`/detail/${blog.id}`" class="h3Link">
            {{blog.title}}
          </router-link>
          <span>{{friendlyDate(blog.updatedAt)}}</span>
        </h3>
        <p>{{blog.description}}</p>
      </div>
    </section>
    <section>
      <a-pagination
        :total="total"
        :pageSize="size"
        @change="onPageChange"
        class="pagination"
        :current="page"
      />
    </section>
  </div>
</template>

<script src="./Home.js">


</script>

<style scoped src="./Home.less" lang="less">

</style>
