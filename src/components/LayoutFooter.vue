<template>
  <footer class="footer">
    <a href="http://xuae.github.io/vue-admin-antd/" target="_blank">
      Vue Admin Antd
    </a>
    <a href="http://www.github.com/xuae/vue-admin-antd" target="_blank">
      <a-icon type="github" />
    </a>
    Copyright ©2020
    <a href="http://www.github.com/xuae" target="_blank">xuae</a>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class LayoutFooter extends Vue {}
</script>

<style lang="less" scoped>
  .footer {
    margin: @padding-lg * 2 0 @padding-lg;
    padding: 0 @padding-md;
    text-align: center;
    line-height: 1.5;

    a {
      color: rgba(0, 0, 0, 0.65);
      transition: all 0.3s;
      &:hover {
        color: @primary-color;
      }
      &:active,
      &:hover,
      &:focus {
        text-decoration: none;
        outline: 0;
      }
    }
  }
</style>
