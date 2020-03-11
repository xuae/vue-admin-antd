<template>
  <div class="exception">
    <h1>
      500
    </h1>
    <h2>抱歉，服务器出错了，请稍后重试</h2>
    <a-button type="primary" @click="$router.push({ name: 'home' })">
      返回首页
    </a-button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Exception500 extends Vue {}
</script>

<style lang="less" scoped></style>
