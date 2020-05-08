<template>
  <header :class="{login:isLogin,'no-login':!isLogin}" class="xxx">
    <template v-if="!isLogin">
      <h1>let's share</h1>
      <p>选择大于努力，认真你就输了</p>
      <div id="buttons">
        <router-link to="/login">
          <el-button class="left">立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>

    <template v-else-if="isLogin">
      <h1>let's share</h1>
      <i class="edit el-icon-edit"></i>
      <div class="user">
        <img class="avatar" :src="user.avatar" alt="user.username" :title="user.username">
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li>
            <a href="#" @click="onLogout">注销</a>
          </li>
        </ul>

      </div>
    </template>

  </header>
</template>

<script>
  import auth from '../API/auth'

  window.auth = auth
  import {mapGetters, mapActions} from 'vuex'
  import router from 'vue-router'

  export default {
    data() {
      return {}
    },

    computed: {
      ...mapGetters([
        'isLogin',
        'user'
      ])
    },

    created() {
      this.checkLogin()
    },

    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout() {
        this.logout()

      }
    }

  }
</script>

<style scoped lang="less">
  @import "../assets/base.less";
  @import '../assets/common.less';

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

      button {
        &:hover {
          background: rgba(0, 153, 51);
          color: white;
        }
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

    .user {
      position: relative;

      ul {
        display: none;
        position: absolute;
        right: 0;
        top: 90%;
        border: 1px solid #eaeaea;
        margin: 0;
        padding: 0;
        background: #fff;

        a {
          color: #333;
          font-size: 12px;
          display: block;
          padding: 5px 8px;

          &:hover {
            background: #eaeaea;
          }

        }


      }

      &:hover ul {
        display: block;
      }
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
