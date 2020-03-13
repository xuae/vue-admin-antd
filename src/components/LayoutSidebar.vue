<!--布局左侧边栏 - 包含logo、菜单导航-->
<template>
  <a-layout-sider
    v-model="menuCollapsed"
    class="layout-sidebar"
    :trigger="null"
    :breakpoint="breakpoint"
    :collapsed-width="collapsedWidth"
    :collapsible="collapsible"
    :default-collapsed="defaultCollapsed"
    :width="width"
    :theme="theme"
  >
    <div class="layout-sidebar__logo">
      <img src="../assets/images/logo.png" alt="" />
      <h1>Vue Admin Antd</h1>
    </div>
    <a-menu mode="inline" theme="dark">
      <template v-for="item in routes">
        <template v-if="showMenu(item)">
          <a-menu-item v-if="!getMenuShowingChildren(item)" :key="item.path">
            <a-icon v-if="getMenuIcon(item)" :type="getMenuIcon(item)" />
            <span>{{ getMenuTitle(item) }}</span>
          </a-menu-item>
          <layout-sidebar-menu v-else :key="item.path" :menu="item" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import { RouteConfig } from 'vue-router';
  import LayoutSidebarMenu from '@/components/LayoutSidebarMenu.vue';

  const SidebarModule = namespace('sidebar');

  @Component({
    components: { LayoutSidebarMenu },
  })
  export default class LayoutSidebar extends Vue {
    menuCollapsed: Boolean = false; // 当前折叠状态

    @Watch('menuCollapsed')
    onMenuCollapsedChange() {
      this.setCollapsed(this.menuCollapsed);
    }

    @SidebarModule.State('breakpoint') breakpoint!: string;
    @SidebarModule.State('collapsed') collapsed!: Boolean;
    @Watch('collapsed')
    onCollapsedChange() {
      this.menuCollapsed = this.collapsed;
    }

    @SidebarModule.State('collapsedWidth') collapsedWidth!: number;
    @SidebarModule.State('collapsible') collapsible!: Boolean;
    @SidebarModule.State('defaultCollapsed') defaultCollapsed!: Boolean;
    @SidebarModule.State('width') width!: number | string;
    @SidebarModule.State('theme') theme!: string;

    @SidebarModule.Mutation('SET_COLLAPSED') setCollapsed!: Function;

    // 获取全部路由，作为左侧菜单导航数据
    get routes() {
      const router: any = this.$router;
      return router.options.routes;
    }

    // 是否显示菜单
    showMenu(menu: RouteConfig) {
      return !(menu.meta && menu.meta.hidden);
    }

    // 菜单有重定向且仅有一个子菜单，没title时，显示其子菜单数据
    hasMenuRootChild(menu: RouteConfig) {
      if (
        !this.getMenuTitle(menu) &&
        menu.children &&
        menu.children.length === 1
      ) {
        return menu.children[0];
      }
      return null;
    }

    // 获取菜单的标题
    getMenuTitle(menu: RouteConfig) {
      if (this.showMenu(menu)) {
        if (menu.meta && menu.meta.title) {
          return menu.meta.title;
        } else if (menu.name) {
          return menu.name;
        }
        return menu.path;
      }
      return null;
    }

    // 获取菜单的图标
    getMenuIcon(menu: RouteConfig) {
      if (menu.meta && menu.meta.icon) {
        return menu.meta.icon;
      }
      return null;
    }

    // 获取菜单需要显示的子菜单列表
    getMenuShowingChildren(menu: RouteConfig) {
      if (!menu.children || menu.children.length === 0) {
        return null;
      }
      const children = menu.children.filter(item => this.showMenu(item));
      return children.length > 0 ? children : null;
    }
  }
</script>

<style lang="less" scoped>
  .layout-sidebar {
    height: 100vh;
    overflow: auto;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

    &__logo {
      height: @layout-header-height;
      line-height: @layout-header-height;
      position: relative;
      padding: 0 @padding-md;
      overflow: hidden;
      background: #001529;
      cursor: pointer;
      transition: all 0.3s;

      img {
        height: @layout-header-height / 4 * 3;
        padding: @layout-header-height / 8;
        vertical-align: middle;
        display: inline-block;
      }

      h1 {
        display: inline-block;
        margin: 0;
        color: @white;
        font-weight: 600;
        font-size: 20px;
        vertical-align: middle;
        animation: fade-in;
        animation-duration: 0.3s;
      }
    }
  }
</style>
