<!-- @Author akai -->
<!-- @Create 2019-03-06 15:45 -->
<!-- @Description 布局底部导航栏 -->
<template>
  <div class="layout-footer">
    <md-tab-bar
        v-model="current"
        :items="tabItems"
        :has-ink="false"
        @change="handleTabChange"
    >
      <template slot="item" slot-scope="{ item }">
        <div class="custom-item">
          <div class="icon">
            <md-icon :name="item.meta.icon" />
          </div>
          <div class="text">
            <span v-text="item.meta.title"></span>
          </div>
        </div>
      </template>
    </md-tab-bar>

    <!--<div class="layout-footer-center">-->
      <!--+-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import { tabRoutersConf } from '@/router/tabRoutersConf';

import { RouteConfig } from 'vue-router';
import { TabBar, Icon } from 'mand-mobile';

@Component({
  components: {
    [TabBar.name]: TabBar, [Icon.name]: Icon,
  },
})
export default class LayoutFooter extends Vue {
  private tabItems: RouteConfig[] = tabRoutersConf;
  private current: string = this.$store.state.route.name;

  @Watch('$store.state.route.name')
  onRouteChange(val: string, oldVal: string){
    this.current = val;
  }

  public handleTabChange(item: RouteConfig, index: number, prevIndex: number) {
    if ( item.path === '' ) { // 为以后添加新 tab 作预留
      this.$nextTick( () => { this.$nextTick( () => {
        this.current = tabRoutersConf[prevIndex].name;
      });});
      return;
    }
    this.$router.push({ name: item.name});
  }

}
</script>

<style lang="scss" scoped>
  @import './layout';

  .layout-footer {
    &-center {
      position: absolute;
      z-index: 100;
      width: 100px;
      left:0;
      right: 0;
      top:0;
      bottom: 0;

      margin:auto;
    }
  }
</style>
