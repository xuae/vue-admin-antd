<template>
  <a-button type="primary" class="custom-class">
    button
  </a-button>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
  }
</script>

<style scoped lang="less">
  .custom-class {
    color: @red-6;
  }
</style>
