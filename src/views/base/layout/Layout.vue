<!-- @Author akai -->
<!-- @Create 2019-03-06 15:34 -->
<!-- @Description 页面布局 -->
<template>
  <div class="layout">
    <layout-header v-if="showHeader"/>

    <div class="layout-content" :style="contentStyle">
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

    @baseModule.Getter showHeader;
    // get hiddenHeader() { // TODO 优化成全局方法
    //   return this.$route.meta.header === 'hidden';
    // }
    get hiddenFooter() { // TODO 优化成全局方法
      return this.$route.meta.footer === 'hidden';
    }
    get contentStyle() {
      if ( !this.showHeader ) {
        return {
          paddingTop: 0
        }
      }
      if ( this.hiddenFooter ) {
        return {
          paddingBottom: 0
        }
      }
    }



  }
</script>

<style lang="scss" scoped>
  @import './layout';
</style>

