<!-- @Author akai -->
<!-- @Create 2019-03-06 15:34 -->
<!-- @Description 页面布局 -->
<template>
  <div class="layout">
    <Header>
    </Header>
    <div class="layout-content">
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
      <h1>sdgsdfgdgf</h1>
    </div>
    <Footer>
    </Footer>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import { namespace } from 'vuex-class';

  const baseModule = namespace('base');

  import Header from './Header'
  import Footer from './Footer'

  @Component({
    components: {
      Header, Footer,
    }
  })
  export default class Layout extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import './layout';
</style>

