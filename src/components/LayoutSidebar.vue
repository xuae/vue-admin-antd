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
    <!--Logo-->
    <div class="layout-sidebar__logo">
      <img src="../assets/images/logo.png" alt="" />
      <h1>Vue Admin Antd</h1>
    </div>
    <!--菜单-->
    <a-menu
      mode="inline"
      :theme="theme"
      :open-keys="openMenuKeys"
      :selected-keys="[selectedMenuKey]"
      @openChange="onOpenChange"
      @click="onClick"
    >
      <template v-for="item in routes">
        <!--隐藏的菜单不显示-->
        <template v-if="showMenu(item)">
          <!--一级根菜单，menu = item-->
          <template v-if="isRootMenu(item)">
            <a-menu-item v-if="!getSubMenus(item)" :key="item.name">
              <a-icon v-if="getMenuIcon(item)" :type="getMenuIcon(item)" />
              <span>{{ getMenuTitle(item) }}</span>
            </a-menu-item>
            <layout-sidebar-menu v-else :key="item.name" :menu="item" />
          </template>
          <!--不是一级根菜单，显示其第一个子元素，menu = item.children[0]-->
          <template v-else>
            <a-menu-item
              v-if="!getSubMenus(item.children[0])"
              :key="item.children[0].name"
            >
              <a-icon
                v-if="getMenuIcon(item.children[0])"
                :type="getMenuIcon(item.children[0])"
              />
              <span>{{ getMenuTitle(item.children[0]) }}</span>
            </a-menu-item>
            <layout-sidebar-menu
              v-else
              :key="item.children[0].name"
              :menu="item.children[0]"
            />
          </template>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
  import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import { RouteConfig, RouteRecord } from 'vue-router';
  import LayoutSidebarMenu from '@/components/LayoutSidebarMenu.vue';

  const SidebarModule = namespace('sidebar');

  @Component({
    components: { LayoutSidebarMenu },
  })
  export default class LayoutSidebar extends Vue {
    menuCollapsed: Boolean = false; // 菜单折叠状态
    selectedMenuKey: string = ''; // 选中的菜单 key 值
    openMenuKeys: Array<string> = []; // 展开的菜单 key 数组
    tempOpenMenuKeys: Array<string> = []; // 存放菜单折叠时，展开的 key 数组

    // 若当前需要跳转的路由与当前路由一致，则刷新当前路由页面
    @Emit('reload-view')
    reloadView() {}

    @Watch('menuCollapsed')
    onMenuCollapsedChange() {
      this.setCollapsed(this.menuCollapsed);
    }

    @SidebarModule.State('breakpoint') breakpoint!: string;
    @SidebarModule.State('collapsed') collapsed!: Boolean;
    @Watch('collapsed')
    onCollapsedChange() {
      if (this.collapsed) {
        this.tempOpenMenuKeys = [...this.openMenuKeys];
        this.openMenuKeys = [];
      } else {
        this.openMenuKeys = [...this.tempOpenMenuKeys];
      }
      this.menuCollapsed = this.collapsed;
    }

    @SidebarModule.State('collapsedWidth') collapsedWidth!: number;
    @SidebarModule.State('collapsible') collapsible!: Boolean;
    @SidebarModule.State('defaultCollapsed') defaultCollapsed!: Boolean;
    @SidebarModule.State('width') width!: number | string;
    @SidebarModule.State('theme') theme!: string;
    @SidebarModule.State('uniqueOpened') uniqueOpened!: string;

    @SidebarModule.Mutation('SET_COLLAPSED') setCollapsed!: Function;

    // 获取全部路由，作为左侧菜单导航数据
    get routes() {
      const router: any = this.$router;
      return router.options.routes;
    }

    // 获取当前路由信息
    get route() {
      return this.$route;
    }

    // 路由更改时，更改选中的菜单 key 和展开的菜单key 数组
    @Watch('route', { immediate: true, deep: true })
    onRouteChange() {
      const route = this.route;
      if (route.name) {
        this.selectedMenuKey = route.name;
      }
      const openKeys: Array<string> = [];
      route.matched.forEach((item: RouteRecord) => {
        if (item.name && item.name !== route.name) {
          openKeys.push(item.name);
        }
      });
      if (this.uniqueOpened) {
        this.openMenuKeys = openKeys;
      } else {
        this.openMenuKeys = [...new Set([...this.openMenuKeys, ...openKeys])];
      }
    }

    // 获取一级可展开的菜单 key 数组
    get rootMenuKeys() {
      const keys: Array<string> = [];
      this.routes.forEach((route: RouteConfig) => {
        if (this.isRootMenu(route)) {
          if (this.getSubMenus(route) && route.name) {
            keys.push(route.name);
          }
        } else if (route.children) {
          if (this.getSubMenus(route.children[0]) && route.children[0].name) {
            keys.push(route.children[0].name);
          }
        }
      });
      return keys;
    }

    // 多级菜单展开事件
    onOpenChange(openKeys: string[]) {
      console.log('open', openKeys, this.openMenuKeys);
      if (this.uniqueOpened) {
        // latestOpenKey 无值表示当前菜单被关闭，有值表示当前点击展开的菜单 key
        const latestOpenKey: string | undefined = openKeys.find(
          key => !this.openMenuKeys.includes(key)
        );
        let data: string[] = openKeys;
        if (latestOpenKey && this.rootMenuKeys.includes(latestOpenKey)) {
          data = [latestOpenKey];
        }
        this.openMenuKeys = data;
      } else {
        this.openMenuKeys = openKeys;
      }
    }

    // 子菜单点击事件
    onClick({ item = null, key = '', keyPath = [] } = {}) {
      if (this.route.name === key) {
        // 若在当前页，则刷新页面
        this.reloadView();
      } else {
        this.$router.push(
          { name: key },
          () => {
            this.selectedMenuKey = key;
          },
          (error: Error) => {
            this.reloadView();
          }
        );
      }
    }

    // 是否显示菜单
    showMenu(menu: RouteConfig) {
      if (this.route.name === menu.name) {
        // 无论当前菜单是否隐藏，只要 name 相同，则强制显示此菜单
        return true;
      }
      return !(menu.meta && menu.meta.hidden);
    }

    // 是否是根菜单，若当前根路由有 redirect，且子路由只有一个时，菜单仅显示子路由
    isRootMenu(menu: RouteConfig) {
      if (menu.redirect && menu.children && menu.children.length === 1) {
        return false;
      }
      return true;
    }

    // 获取菜单的标题
    getMenuTitle(menu: RouteConfig) {
      if (this.showMenu(menu)) {
        if (menu.meta && menu.meta.title) {
          return menu.meta.title;
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
    getSubMenus(menu: RouteConfig) {
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

    /deep/ .ant-menu {
      border-right: none;
    }

    &__logo {
      height: @layout-header-height;
      line-height: @layout-header-height;
      position: relative;
      padding: 0 @padding-md;
      overflow: hidden;
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
        font-weight: 600;
        font-size: 20px;
        vertical-align: middle;
        animation: fade-in;
        animation-duration: 0.3s;
      }
    }

    &.ant-layout-sider-dark {
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

      .layout-sidebar__logo {
        background: @layout-header-background;

        h1 {
          color: @white;
        }
      }
    }

    &.ant-layout-sider-light {
      box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);

      .layout-sidebar__logo {
        background: @white;

        h1 {
          color: @primary-color;
        }
      }
    }
  }
</style>
