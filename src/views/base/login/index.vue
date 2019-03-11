<!-- @Author akai -->
<!-- @Create 2019-03-08 14:36 -->
<!-- @Description 登录页 -->
<template>
  <div class="login-page">
    <md-button type="primary">登录</md-button>
    <md-field>

    </md-field>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import { Button } from 'mand-mobile';
import MdField from 'mand-mobile/components/field/index.vue';

@Component({
  components: {
    MdField,
    [Button.name]: Button,
  },
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
