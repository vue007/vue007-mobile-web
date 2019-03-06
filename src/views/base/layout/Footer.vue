<!-- @Author akai -->
<!-- @Create 2019-03-06 15:45 -->
<!-- @Description TODO -->
<template>
  <div class="layout-footer">
    <md-tab-bar
        v-model="current"
        :items="items"
        :has-ink="false"
    >
      <template slot="item" slot-scope="{ item }">
        <div class="custom-item">
          <div class="icon">
            <md-icon :name="item.icon" />
          </div>
          <div class="text">
            <span v-text="item.label"></span>
          </div>
        </div>
      </template>
    </md-tab-bar>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  import {TabBar, Icon} from 'mand-mobile'
  @Component({
    components: {
      [TabBar.name]: TabBar, [Icon.name]: Icon
    }
  })
  export default class Footer extends Vue {
    private current = 1;
    private items:Array = [
        {name: 1, label: '首页', icon: 'home'},
        {name: 3, label: '发布', icon: 'camera'},
        {name: 5, label: '我的', icon: 'user'}
      ];

  }
</script>

<style lang="scss" scoped>
  @import './layout';
</style>
