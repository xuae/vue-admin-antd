<!--侧边栏菜单函数式组件-->
<template functional>
  <a-sub-menu :key="props.menu.name">
    <template slot="title">
      <a-icon
        v-if="parent.getMenuIcon(props.menu)"
        :type="parent.getMenuIcon(props.menu)"
      />
      <span>{{ parent.getMenuTitle(props.menu) }}</span>
    </template>
    <template v-for="item in parent.getSubMenus(props.menu)">
      <template v-if="parent.showMenu(item)">
        <a-menu-item v-if="!parent.getSubMenus(item)" :key="item.name">
          <a-icon
            v-if="parent.getMenuIcon(item)"
            :type="parent.getMenuIcon(item)"
          />
          <span>{{ parent.getMenuTitle(item) }}</span>
        </a-menu-item>
        <layout-sidebar-menu v-else :key="item.name" :menu="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class LayoutSidebarMenu extends Vue {
    @Prop({
      type: Object,
      required: true,
    })
    menu!: object;
  }
</script>
