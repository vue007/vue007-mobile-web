<!-- @Author akai -->
<!-- @Create 2019-03-06 15:45 -->
<!-- @Description 布局头部 -->
<template>
  <div class="layout-header">
    <hi-header :title="title" @leftClick="handleLeftClick" >
      <icon slot="left" name="arrow-left"></icon>
      <div slot="right" style="width: 16px;"></div>
    </hi-header>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import { Icon } from 'mand-mobile';
  import { HiHeader } from '@/components/hive/index';

  @Component({
    components: {
      Icon,
      HiHeader,
    }
  })
  export default class LayoutHeader extends Vue {
    private title: string = '首页';

    handleLeftClick() {
      this.$router.go(-1);
    }
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
  }
</style>

