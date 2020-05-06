<template>
  <div class="register">
    <h4>用户名</h4>
    <el-input placeholder="请输入用户名"></el-input>
    <!--    <p class="error">当前用户名已注册</p>-->
    <h4>密码</h4>
    <el-input type="password" placeholder="请输入密码"></el-input>
    <!--    <p class="error">当前用户名已注册</p>-->
    <el-button>立即注册</el-button>
    <p class="notice">
      已有账号？
      <router-link to="/login">立即登录</router-link>
    </p>
  </div>
</template>

<script src="./Register.js">


</script>

<style src="./Register.less" lang="less">

</style>
