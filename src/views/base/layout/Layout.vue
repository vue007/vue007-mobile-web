<!-- @Author akai -->
<!-- @Create 2019-03-06 15:34 -->
<!-- @Description 页面布局 -->
<template>
  <div class="layout">
    <layout-header/>

    <div class="layout-content">
      <router-view/>
    </div>

    <layout-footer/>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import { namespace } from 'vuex-class';

  const baseModule = namespace('base');

  import LayoutHeader from './LayoutHeader'
  import LayoutFooter from './LayoutFooter'

  @Component({
    components: {
      LayoutHeader, LayoutFooter,
    }
  })
  export default class Layout extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import './layout';
</style>

