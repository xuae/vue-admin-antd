/**
 * ant design 组件全局注册
 *
 * @dependency ant-design-vue
 */

import {
  Affix,
  Alert,
  Anchor,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  // Base,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  Comment,
  ConfigProvider,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  message,
  Modal,
  notification,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Skeleton,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  TimePicker,
  // Mention,
  Tooltip,
  // version,
  Transfer,
  Tree,
  TreeSelect,
  Upload,
} from 'ant-design-vue';
import Vue from 'vue';

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$form = Form;
// Vue.prototype.$destroyAll = Modal.destroyAll;

/* v1.1.3+ registration methods */
/**
 * 样式未全局引入，注册组件时，需手动引入当前组件的样式
 *
 * @example
 * import 'ant-design-vue/lib/badge/style'; // 引入组件样式
 * Vue.use(Badge); // 注册组件
 */
// Vue.use(Base);

// 固钉
// Vue.use(Affix);

// 锚点
// Vue.use(Anchor);

//自动完成
// Vue.use(AutoComplete);

// 警告提示
import 'ant-design-vue/lib/alert/style';
Vue.use(Alert);

// 头像
import 'ant-design-vue/lib/avatar/style';
Vue.use(Avatar);

// 返回顶部
import 'ant-design-vue/lib/back-top/style';
Vue.use(BackTop);

// 标签
import 'ant-design-vue/lib/badge/style';
Vue.use(Badge);

// 面包屑
import 'ant-design-vue/lib/breadcrumb/style';
Vue.use(Breadcrumb);

// 按钮
import 'ant-design-vue/lib/button/style';
Vue.use(Button);

// Vue.use(Calendar);
// Vue.use(Card);
// Vue.use(Collapse);
// Vue.use(Carousel);
// Vue.use(Cascader);

// 多选框
import 'ant-design-vue/lib/checkbox/style';
Vue.use(Checkbox);

// Vue.use(Col);
// Vue.use(DatePicker);
// Vue.use(Divider);
// Vue.use(Drawer);

// 下拉菜单
import 'ant-design-vue/lib/dropdown/style';
Vue.use(Dropdown);

// 表单
import 'ant-design-vue/lib/form/style';
Vue.use(Form);

// 图标
import 'ant-design-vue/lib/icon/style';
Vue.use(Icon);

// 输入框
import 'ant-design-vue/lib/input/style';
Vue.use(Input);

// Vue.use(InputNumber);

// 布局
import 'ant-design-vue/lib/layout/style';
Vue.use(Layout);

// 列表
// Vue.use(List);

// 全局化配置
Vue.use(LocaleProvider);

// 导航菜单
import 'ant-design-vue/lib/menu/style';
Vue.use(Menu);

// Vue.use(Modal);
// Vue.use(Pagination);
// Vue.use(Popconfirm);
// Vue.use(Popover);
// Vue.use(Progress);
// Vue.use(Radio);
// Vue.use(Rate);
// Vue.use(Row);
// Vue.use(Select);
// Vue.use(Slider);
// Vue.use(Spin);
// Vue.use(Statistic);
// Vue.use(Steps);
// Vue.use(Switch);
// Vue.use(Table);
// Vue.use(Transfer);
// Vue.use(Tree);
// Vue.use(TreeSelect);

// 标签页
import 'ant-design-vue/lib/tabs/style';
Vue.use(Tabs);

// Vue.use(Tag);
// Vue.use(TimePicker);
// Vue.use(Timeline);
// Vue.use(Tooltip);
// Vue.use(Upload);
// Vue.use(Skeleton);
// Vue.use(Comment);
// Vue.use(ConfigProvider);
// Vue.use(Empty);
