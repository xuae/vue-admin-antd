<!--登录页-->
<template>
  <div class="login">
    <header class="login__header">
      <img src="../../assets/images/logo.png" alt="" />
      <h1>Vue Admin Antd</h1>
      <p>基于 Vue + Ant Design + Typescript 的管理系统</p>
    </header>
    <div class="login__content">
      <login-form v-if="!showRegister" @to-register="handleToRegister" />
      <register-form v-else @to-login="handleToLogin" />
    </div>
    <layout-footer />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LayoutFooter from '@/components/LayoutFooter.vue';
  import LoginForm from '@/views/login/components/login-form.vue';
  import RegisterForm from '@/views/login/components/register-form.vue';

  @Component({
    components: { RegisterForm, LoginForm, LayoutFooter },
  })
  export default class Login extends Vue {
    showRegister: boolean = false;

    // 显示注册表单
    handleToRegister() {
      this.showRegister = true;
    }

    // 显示登录表单
    handleToLogin() {
      this.showRegister = false;
    }
  }
</script>

<style lang="less" scoped>
  @footer-height: 100px;

  .login {
    width: 100vw;
    height: 100vh;
    background: @layout-body-background;
    display: flex;
    flex-direction: column;

    &__header {
      padding: @padding-lg * 2 @padding-md @padding-lg;
      text-align: center;

      img {
        height: @layout-header-height / 4 * 3;
        margin-right: @padding-xs;
        vertical-align: middle;
        display: inline-block;
      }

      h1 {
        display: inline-block;
        margin: 0;
        font-weight: 600;
        font-size: 30px;
        vertical-align: middle;
        line-height: @layout-header-height;
      }
    }

    &__content {
      flex: 1;
      width: 368px;
      margin: auto;
    }
  }
  @media screen and (max-width: 576px) {
    .login__content {
      width: 95%;
    }
  }
</style>
