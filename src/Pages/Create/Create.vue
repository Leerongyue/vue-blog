<template>
  <div class="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input
      placeholder="请输入内容"
    >
    </el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input
      placeholder="请输入内容"
      type="textarea"
      rows=3
    >
    </el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input
      placeholder="请输入内容"
      type="textarea"
      rows=10
    >
    </el-input>
    <p class="msg">限30个字</p>
    <p>
      是否展示到首页
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>
    <el-button>确定</el-button>
  </div>
</template>

<script src="./Create.js">


</script>

<style  src="./Create.less" lang="less">

</style>
