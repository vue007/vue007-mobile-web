<!-- @Author akai -->
<!-- @Create 2019-03-06 15:45 -->
<!-- @Description 布局头部 -->
<template>
  <div class="layout-header">
    <div class="nav">
      <div class="nav-left">
        <md-icon name="arrow-left"></md-icon>
      </div>
      <div class="nav-title">
        {{ title }}
      </div>
      <div class="nav-right">
        <md-icon name="motor-vehicle"></md-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import { Icon } from 'mand-mobile';

  @Component({
    components: {
      [Icon.name]: Icon
    }
  })
  export default class Header extends Vue {
    private title: string = '首页';
  }
</script>

<style lang="scss" scoped>
  @import './layout';
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 30px;
    height: 90px;

    &-left {

    }
    &-title {

    }
    &-right {

    }
  }
</style>

