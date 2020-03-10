<template>
  <div>
    <a-button type="primary" class="custom-class">
      button
    </a-button>
    <br />
    {{ managerMsg ? managerMsg : '空' }}
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Manager } from '@/api/types/Manager';
  import { managerInfo } from '@/api/Manager';

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    managerMsg: Manager | null = null;

    async getManagerInfo() {
      const res = await managerInfo({
        id: '1111',
      });
      this.$set(this, 'managerMsg', res.data);
    }

    created() {
      this.getManagerInfo();
    }
  }
</script>

<style scoped lang="less">
  .custom-class {
    color: @red-6;
  }
</style>
