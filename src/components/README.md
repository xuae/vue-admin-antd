# Component 规范

- <a href='#directory'>文件结构</a>
- <a href='#standard'>代码规范</a>

## <h2 id='directory'>文件结构</h2>

```
├─Layout.vue                 #框架布局
├─LayoutFooter.vue           #框架布局 - 底部版权声明
├─LayoutHeader.vue           #框架布局 - 顶部
├─LayoutSidebar.vue          #框架布局 - 左侧边栏
├─LayoutSidebarMenu.vue      #框架布局 - 左侧边栏菜单
└─README.md                  #组件文件说明
```

## <h2 id='standard'>代码规范</h2>

- 文件名首字母大写，采用 PascalCase 的命名方式

- Xxx.vue 模板 (组件文件的规范)

```
<!--组件用途说明-->

<template>
    <!--必须有一个根标签-->
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
  
    @Component
    export default class Xxx extends Vue {
    
    }
</script>
<style lang="less" scoped></style>
```

- Component 引入其他组件

```
import { Component, Vue } from 'vue-property-decorator';
import ComponentXxx form '@/components/ComponentXxx.vue';

@Component({
    components: { ComponentXxx }
})
export default ...
```

- Prop 接收参数

```
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Xxx extends Vue {
    @Prop({
        // 此对象内的数据是给 vue 检测用的
        type: Boolean,
        default: false,
    })
    show!: boolean; // 'show': 参数名，'boolean': typescript 的类型
}
```

- Prop 接收参数是对象或数组

```
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Column {
    id: string;
    name: string;
};
type Columns = Array<Column>;

@Component
export default class Xxx extends Vue {
    @Prop({
        type: Array as () => Columns,
        default: () => [],
    })
    columns!: Columns;
}
```

- Ref 引用子组件

```
<template>
    <a-table ref="table" />
</template>
<script lang="ts">
    import { Component, Ref, Vue } from 'vue-property-decorator';
  
    @Component
    export default class Xxx extends Vue {
        @Ref() readonly table!: any;
        // this.table.子组件的方法名，就可以直接调用子组件公开的方法
    }
</script>
```
