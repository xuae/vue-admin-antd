<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';

  import { Component, Vue } from 'vue-property-decorator';

  @Component({ HelloWorld })
  export default class Home extends Vue {}
</script>
