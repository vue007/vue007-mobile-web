<!-- @Author akai -->
<!-- @Create 2019-03-06 15:45 -->
<!-- @Description TODO -->
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
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import { baseTabRoutesConf } from '@/router/routesConf'

  import { RouteConfig } from 'vue-router';
  import {TabBar, Icon} from 'mand-mobile';
  @Component({
    components: {
      [TabBar.name]: TabBar, [Icon.name]: Icon
    }
  })
  export default class LayoutFooter extends Vue {
    private tabItems:Array<RouteConfig> = baseTabRoutesConf;

    get current() { // 底部导航当前选项
      return this.$route.name
    }
    set current(name: string) {} // hack v-model

    handleTabChange(item, index, prevIndex) {
      this.$router.push({ name: item.name})
    }

  }
</script>

<style lang="scss" scoped>
  @import './layout';
</style>
