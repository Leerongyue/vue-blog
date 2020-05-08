<template>
  <div class="login">
    <h4>用户名</h4>
    <el-input placeholder="请输入用户名" v-model="username"></el-input>
    <p class="error" v-if="msg.indexOf('用')>=0 || msg.length===25">{{msg}}</p>
    <h4>密码</h4>
    <el-input type="password" placeholder="请输入密码" v-model="password" @keyup.enter.native="onLogin"></el-input>
    <p class="error" v-if="msg.indexOf('密')>=0">{{msg}}</p>
    <el-button @click="onLogin">立即登录</el-button>
    <p class="notice">
      没有账号？
      <router-link to="/register">注册新用户</router-link>
    </p>
  </div>
</template>

<script src="./Login.js">


</script>

<style src="./Login.less" lang="less">


</style>
