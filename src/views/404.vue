<template>
  <div class="exception">
    <h1>
      404
    </h1>
    <h2>抱歉，你访问的页面不存在</h2>
    <a-button type="primary" @click="$router.push({ name: 'home' })">
      返回首页
    </a-button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Exception404 extends Vue {}
</script>

<style lang="less" scoped></style>
