<!-- @Author akai -->
<!-- @Create 2019-03-07 13:56 -->
<!-- @Description TODO -->
<template>
  <div class="header">
    <div class="header-left" @click="handleLeftClick">
      <slot name="left"></slot>
    </div>
    <div class="header-title">
      {{ title }}
    </div>
    <div class="header-right" @click="handleRightClick">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
@Component({
  name: 'hi-header',
})
export default class Header extends Vue {

  @Prop({ type: String }) private title!: string;

  @Emit('leftClick')
  private handleLeftClick() {
    // empty
  }
  @Emit('rightClick')
  private handleRightClick() {
    // empty
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 30px;
    height: 100%; // 高度取决于外部容器

    &-left {
      width: 50px;
    }
    &-title {

    }
    &-right {
      width: 50px;
    }

  }
</style>

