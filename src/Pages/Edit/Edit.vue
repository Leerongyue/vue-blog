<template>
  <div class="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input
      v-model="title"
      placeholder="请输入内容"
    >
    </el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input
      v-model="description"
      type="textarea"
      :rows="3"
      placeholder="请输入内容"
    >
    </el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input
      v-model="content"
      type="textarea"
      :rows="10"
      placeholder="请输入内容"
    >
    </el-input>
    <p>是否展示到首页
      <el-switch
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./Edit.js">


</script>

<style src="./Edit.less" lang="less" scoped>

</style>
