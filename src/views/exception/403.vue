<template>
  <div class="exception">
    <h1>
      403
    </h1>
    <h2>抱歉，你无权访问该页面</h2>
    <a-button type="primary" @click="$router.push({ name: 'home' })">
      返回首页
    </a-button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Exception403 extends Vue {}
</script>

<style lang="less" scoped></style>
