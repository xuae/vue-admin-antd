<template>
  <a-form class="register__form" :form="form" @submit="handleSubmit">
    <a-tabs class="register__form__tab" :animated="false">
      <a-tab-pane key="account" tab="注册">
        <a-form-item>
          <a-input
            v-decorator="[
              'account',
              {
                rules: [
                  { required: true, message: '请输入用户名' },
                  $rules.userName,
                ],
              },
            ]"
            size="large"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'mobile',
              {
                rules: [
                  { required: true, message: '请输入邮箱或手机号' },
                  $rules.mobileOrEmail,
                ],
              },
            ]"
            size="large"
            placeholder="手机号或邮箱"
          >
            <a-icon slot="prefix" type="mobile" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-search
            v-decorator="[
              'code',
              { rules: [{ required: true, message: '请输入验证码' }] },
            ]"
            size="large"
            placeholder="验证码"
          >
            <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)" />
            <a-button slot="enterButton">
              获取验证码
            </a-button>
          </a-input-search>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: '请输入密码' },
                  $rules.password,
                ],
              },
            ]"
            size="large"
            type="password"
            placeholder="密码"
            autocomplete
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'confirmPassword',
              { rules: [{ required: true, message: '请再次输入密码' }] },
            ]"
            size="large"
            type="password"
            placeholder="确认密码"
            autocomplete
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
      </a-tab-pane>
    </a-tabs>
    <a-form-item>
      <a-button html-type="submit" type="primary" size="large" block>
        注册
      </a-button>
    </a-form-item>
    <a-form-item class="register__form__other">
      <a href="javascript:;" style="float: right" @click="toLogin">
        已有账号，去登录
      </a>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
  import { Component, Emit, Vue } from 'vue-property-decorator';

  @Component
  export default class RegisterForm extends Vue {
    @Emit('to-login') toLogin() {}

    form: any = null;

    // 登录按钮点击事件
    handleSubmit(e: Event) {
      e.preventDefault();
      this.form.validateFields(async (error: any, values: any) => {
        if (!error) {
          console.log(values);
        }
      });
    }

    // 生命周期 created
    created() {
      if (!this.form) {
        this.form = this.$form.createForm(this, {});
        this.form.validateFields(['account', 'password'], { force: true });
        this.form.validateFields(['mobile', 'code'], { force: false });
      }
    }
  }
</script>

<style lang="less" scoped>
  .register__form {
    &__tab {
      /deep/ .ant-tabs-bar {
        border-bottom: none;
        margin-bottom: @padding-lg;
        text-align: center;
      }
    }
  }
</style>
