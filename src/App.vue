<template>
  <div id="app">
    <a-locale-provider :locale="zh_CN">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
  import 'moment/locale/zh-cn';
  import moment from 'moment';
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';

  moment.locale('zh-cn');
  export default {
    data() {
      return {
        zh_CN,
      };
    },
  };
</script>

<style lang="less"></style>
