<!-- @Author akai -->
<!-- @Create 2019-03-07 15:50 -->
<!-- @Description TODO -->
<template>
  <div class="page">
    <HelloWorld msg="Welcome to Your Mand Mobile"/>
    HOME
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  import HelloWorld from '@/components/HelloWorld.vue';

  @Component({
    components: {
      HelloWorld
    }
  })
  export default class extends Vue {

  }
</script>

<style scoped>
</style>

