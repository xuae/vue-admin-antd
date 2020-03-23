<!--主面板布局-->
<template>
  <a-layout class="layout">
    <layout-sidebar @reload-view="onReloadView" />

    <a-layout class="layout__container">
      <layout-header />

      <a-layout-content ref="layoutContent" class="layout__content">
        <a-back-top class="layout__back" :target="backTopTarget" />
        <router-view
          v-if="isRouterAlive"
          :key="$route.fullPath"
          class="layout__view"
        />

        <layout-footer />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
  import { Component, Provide, Ref, Vue } from 'vue-property-decorator';
  import LayoutFooter from '@/components/LayoutFooter.vue';
  import LayoutHeader from '@/components/LayoutHeader.vue';
  import LayoutSidebar from '@/components/LayoutSidebar.vue';

  @Component({
    components: { LayoutFooter, LayoutHeader, LayoutSidebar },
  })
  export default class Layout extends Vue {
    @Ref() readonly layoutContent!: any;

    isRouterAlive: boolean = true;

    backTopTarget: any = () => window; // 返回顶部按钮的 target

    /**
     * 刷新子路由当前页面
     * 用法：
     * @Inject('reload') readonly reload!: Function; // 需要刷新的页面中注入reload方法
     * this.reload(); // 调用reload方法，刷新页面
     */
    @Provide('reload')
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }

    // 子组件需要刷新当前 view 时调用的方法
    onReloadView() {
      this.reload();
    }

    async mounted() {
      const layoutContent: any = this.$refs.layoutContent;
      this.backTopTarget = () => layoutContent.$el;
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
    flex: auto;
    flex-direction: row;
    height: calc(100vh - 1px);

    &__container {
      /*display: block; // 顶部不固定*/
    }

    &__content {
      margin: 0;
      padding: 0 @padding-md;
      background: transparent;
      overflow: auto;
    }

    &__view {
      margin: @padding-md 0 @padding-lg;
      min-height: 60vh;

      &.ant-card,
      /deep/ .ant-card {
        border: none;
        margin-bottom: @padding-md;
      }
    }

    &__back {
      box-shadow: @box-shadow;
      border-radius: 50%;
      z-index: 30;
    }
  }
</style>
