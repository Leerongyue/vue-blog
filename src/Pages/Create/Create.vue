<template>
  <div class="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input
      placeholder="请输入内容"
      v-model="title"
    >
    </el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input
      v-model="description"
      placeholder="请输入内容"
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 6}"
    >
    </el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input
      v-model="content"
      placeholder="请输入内容"
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 30}"
    >
    </el-input>
    <p>
      是否展示到首页
      <el-switch
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./Create.js">


</script>

<style src="./Create.less" lang="less" scoped>

</style>
