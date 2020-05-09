<template>
  <div class="register">
    <h4>用户名</h4>
    <el-input placeholder="请输入用户名" v-model="username" @input="change($event)"></el-input>
    <p class="error" v-if="msg.length>11 || msg.length===5">{{msg}}</p>
    <h4>密码</h4>
    <el-input type="password" placeholder="请输入密码"  v-model="password"
              @keyup.enter.native="onRegister"></el-input>
    <p class="error" v-if="msg.length===11">{{msg}}</p>
    <el-button @click="onRegister">立即注册</el-button>
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
