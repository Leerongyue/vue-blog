<template>
  <div id="app">
    <Header id="header">头部</Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer">尾部</Footer>
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

  #app {
    display: grid;
    grid-template-columns: 12% auto 12%;
    grid-auto-rows: auto 1fr auto;
    grid-template-areas: 'header header header' '. main .' 'footer footer footer';
  }


  #header {
    border: 1px solid red;
  }

  #main {

  }

  #footer {
    border: 1px solid red;

  }
</style>
