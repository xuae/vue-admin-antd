<!--布局顶部 - 面包屑、用户头像信息等-->
<template>
  <a-layout-header class="layout-header">
    <a-icon
      class="layout-header__trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="handleCollapsed"
    />
    <a-breadcrumb class="layout-header__breadcrumb">
      <template v-if="$route.name !== 'home'">
        <a-breadcrumb-item key="home">
          <router-link :to="{ name: 'home' }">
            首页
          </router-link>
        </a-breadcrumb-item>
      </template>
      <template v-for="({ name, meta, children }, index) in route.matched">
        <a-breadcrumb-item v-if="meta && meta.title" :key="index">
          <span
            v-if="
              !name ||
                !children ||
                children.length === 0 ||
                index === route.matched.length - 1
            "
          >
            {{ meta.title }}
          </span>
          <router-link v-else :to="{ name }">
            {{ meta.title }}
          </router-link>
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
    <div class="layout-header__right">
      <a-dropdown class="layout-header__user">
        <div>
          <a-avatar icon="user" />
          <div class="layout-header__user__name">
            {{ userName }}
          </div>
        </div>
        <a-menu slot="overlay" style="width: 160px" @click="handleMenuClick">
          <a-menu-item key="0">
            <a-icon type="user" />
            个人中心
          </a-menu-item>
          <a-menu-item key="1">
            <a-icon type="setting" />
            个人设置
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <a-icon type="logout" />
            退出登录
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const SidebarModule = namespace('sidebar');

  @Component
  export default class LayoutHeader extends Vue {
    @SidebarModule.State('collapsed') collapsed!: Boolean;

    @SidebarModule.Mutation('SET_COLLAPSED') setCollapsed!: Function;
    userName: string | null = '';

    // 获取当前路由信息
    get route() {
      return this.$route;
    }

    handleCollapsed() {
      this.setCollapsed(!this.collapsed);
    }

    handleMenuClick(e: any) {}

    created() {
      this.userName = 'Admin'; // localStorage.getItem('userName');
    }
  }
</script>

<style lang="less" scoped>
  .layout-header {
    background: @white;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    z-index: 21;

    &__breadcrumb {
      display: inline-block;
    }

    &__trigger {
      padding: @padding-md;
      font-size: 20px;

      &:hover {
        color: @primary-color;
      }
    }

    &__right {
      float: right;
      height: 100%;
      padding-right: @padding-md;

      & > div {
        display: inline-block;
        padding: 0 @padding-md;
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    &__user {
      &__name {
        display: inline-block;
        margin-left: @padding-sm;
        max-width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
      }
    }
  }
</style>
