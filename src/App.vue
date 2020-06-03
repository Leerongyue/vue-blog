<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {Header, Footer}
  }
</script>

<style lang="less">
  @import "./assets/common.less";

  #app {
    display: grid;
    grid-template-columns: 12% auto 12%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header header header" '. main .' 'footer footer footer';

    #header {
      /*border: 1px solid red;*/
      grid-area: header;
      padding-left: 12%;
      padding-right: 12%;
      background: rgba(0, 153, 51);
    }

    #main {
      /*border: 1px solid red;*/
      grid-area: main;
    }

    #footer {
      /*border: 1px solid red;*/
      grid-area: footer;
      padding-left: 12%;
      padding-right: 12%;

    }
  }

  @media (max-width: 500px) {
    #app {
      grid-template-columns: 10px auto 10px;

      #header, #footer {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
</style>
