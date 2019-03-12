<!-- @Author akai -->
<!-- @Create 2019-03-06 15:45 -->
<!-- @Description 布局头部 -->
<template>
  <div class="layout-header">

    <div class="layout-header-left" @click="handleLeftClick">
      <icon name="arrow-left" v-if="!showFooter"></icon>
    </div>
    <div class="layout-header-title">
      {{ title }}
    </div>
    <div class="layout-header-right" @click="handleRightClick">
      <div slot="right" style="width: 16px;"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Icon } from 'mand-mobile';
import { HiHeader } from '@/components/hive/index';
import { namespace } from 'vuex-class';

const baseModule = namespace('base');

@Component({
  components: {
    Icon,
    HiHeader,
  },
})
export default class LayoutHeader extends Vue {

  @baseModule.Getter private showFooter!: boolean;

  get title() {
    return this.$route.meta.title;
  }
  public handleLeftClick() {
    this.$router.go(-1);
  }
  public handleRightClick() {
    //
  }
}
</script>

<style lang="scss" scoped>
  @import './layout';

  .layout-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    height: 100%; // 高度取决于外部容器

    $util-padding: 10px;
    &-left {
      width: 50px;
      padding-left: $util-padding;
    }
    &-title {

    }
    &-right {
      width: 50px;
      padding-left: $util-padding;
    }

  }
</style>

