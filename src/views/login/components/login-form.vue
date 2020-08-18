<template>
  <a-form class="login__form" :form="form" @submit="handleSubmit">
    <a-tabs
      class="login__form__tab"
      :default-active-key="activeKey"
      :animated="false"
      @change="handleTabChange"
    >
      <a-tab-pane key="account" tab="账号密码登录">
        <a-alert
          v-if="errorMessage"
          :message="errorMessage"
          type="error"
          show-icon
        />
        <a-form-item>
          <a-input
            v-decorator="[
              'account',
              { rules: [{ required: true, message: '请输入账号' }] },
            ]"
            size="large"
            placeholder="账号：admin"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入密码' }] },
            ]"
            size="large"
            type="password"
            placeholder="密码：123456"
            autocomplete
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
      </a-tab-pane>
      <a-tab-pane key="mobile" tab="手机号登录" force-render>
        <a-alert
          v-if="errorMessage"
          :message="errorMessage"
          type="error"
          show-icon
        />
        <a-form-item>
          <a-input
            v-decorator="[
              'mobile',
              { rules: [{ required: true, message: '请输入手机号' }] },
            ]"
            size="large"
            placeholder="手机号"
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
      </a-tab-pane>
    </a-tabs>
    <a-form-item>
      <a-checkbox v-decorator="['autoLogin', { valuePropName: 'checked' }]">
        自动登录
      </a-checkbox>
      <a href="javascript:;" style="float: right">忘记密码</a>
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary" size="large" block>
        登录
      </a-button>
    </a-form-item>
    <a-form-item class="login__form__other">
      其他登录方式
      <a-icon type="qq" />
      <a-icon type="wechat" />
      <a-icon type="weibo" />
      <a href="javascript:;" style="float: right" @click="toRegister">
        注册账号
      </a>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
  import { Component, Emit, Vue } from 'vue-property-decorator';
  import Account from '@/api/Account';

  @Component
  export default class LoginForm extends Vue {
    @Emit('to-register') toRegister() {}

    activeKey: 'account' | 'mobile' = 'account';
    form: any = null;
    errorMessage: string | null = null; // 错误提示信息

    // 登录按钮点击事件
    handleSubmit(e: Event) {
      e.preventDefault();
      switch (this.activeKey) {
        case 'account':
          this.form.validateFields(
            ['account', 'password'],
            async (error: any, values: any) => {
              if (!error) {
                this.login(values);
              }
            }
          );
          break;
        case 'mobile':
          this.form.validateFields(
            ['mobile', 'code'],
            async (error: any, values: any) => {
              if (!error) {
                this.login(values);
              }
            }
          );
          break;
      }
    }

    // 登录方法
    async login(values: any) {
      const response = await Account.login(values);
      if (response.statusCode === 200) {
        this.$router.push({ name: 'home' });
      } else {
        this.errorMessage = response.message;
      }
    }

    // tab 切换事件
    handleTabChange(activeKey: 'account' | 'mobile') {
      this.activeKey = activeKey;
      // 清空表单的错误提示
      this.errorMessage = null;
      this.form.setFields({
        account: { value: this.form.getFieldValue('account'), errors: null },
        password: { value: this.form.getFieldValue('password'), errors: null },
        mobile: { value: this.form.getFieldValue('mobile'), errors: null },
        code: { value: this.form.getFieldValue('code'), errors: null },
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
  .login__form {
    &__tab {
      /deep/ .ant-tabs-bar {
        border-bottom: none;
        margin-bottom: @padding-lg;
        text-align: center;
      }

      /deep/ .ant-alert {
        margin-bottom: @padding-lg;
      }
    }

    &__other {
      i {
        margin-left: @padding-md;
        color: rgba(0, 0, 0, 0.2);
        font-size: 24px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }
</style>
