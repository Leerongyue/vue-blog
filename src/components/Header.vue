<template>
  <header :class="{login:isLogin,'no-login':!isLogin}" class="xxx">
    <template v-if="!isLogin">
      <h1>let's share</h1>
      <p>选择大于努力，认真你就输了</p>
      <div id="buttons">
        <el-button class="left">立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>

    <template v-else-if="isLogin">
      <h1>let's share</h1>
      <i title="写博客" class="edit el-icon-edit"></i>
      <img title="个人中心" class="avatar" src="../assets/1.png" alt="">
    </template>

  </header>
</template>

<script>
  export default {
    data() {
      return {
        isLogin: true
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/base";


  header.no-login {
    /*border: 1px solid red;*/
    //上右下左
    padding: 0px 12% 30px 12%;
    display: grid;
    //左右中间对齐，类似于flex的justify-content
    justify-items: center;

    h1 {
      color: #fff;
      font-size: 40px;
      //上右下左
      margin: 20px 0 0 0;
      text-transform: uppercase;
    }

    p {
      //上右下左
      margin: 10px 0 0 0;
      color: #fff;
    }

    #buttons {
      margin: 30px 20px 10px 20px;

      .left {
        margin-right: 30px;
      }
    }
  }

  header.login {

    /*border:1px solid;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: @bgColor;

    h1 {
      /*border: 1px solid;*/
      margin: 0;
      padding: 0;
      color: #fff;
      font-size: 40px;
      text-transform: uppercase;
      flex: 1;

    }


    .edit {
      font-size: 40px;
      color: white;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 15px;
    }
  }

  @media (max-width: 500px) {
    header.xxx {
      h1 {
        font-size: 30px;
      }
    }
  }


</style>
