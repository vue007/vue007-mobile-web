<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  @import "styles/base";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    font-size: 32px;
    line-height: 1.2;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #fc9153;
  }
</style>
