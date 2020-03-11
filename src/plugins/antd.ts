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
// Vue.use(Affix);
// Vue.use(Anchor);
// Vue.use(AutoComplete);
// Vue.use(Alert);
// Vue.use(Avatar);
// Vue.use(BackTop);
import 'ant-design-vue/lib/badge/style';
Vue.use(Badge);
// Vue.use(Breadcrumb);
import 'ant-design-vue/lib/button/style';
Vue.use(Button);
// Vue.use(Calendar);
// Vue.use(Card);
// Vue.use(Collapse);
// Vue.use(Carousel);
// Vue.use(Cascader);
// Vue.use(Checkbox);
// Vue.use(Col);
// Vue.use(DatePicker);
// Vue.use(Divider);
// Vue.use(Drawer);
// Vue.use(Dropdown);
// Vue.use(Form);
// Vue.use(Icon);
// Vue.use(Input);
// Vue.use(InputNumber);
// Vue.use(Layout);
// Vue.use(List);
Vue.use(LocaleProvider); // 全局化配置
// Vue.use(Menu);
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
// Vue.use(Tabs);
// Vue.use(Tag);
// Vue.use(TimePicker);
// Vue.use(Timeline);
// Vue.use(Tooltip);
// Vue.use(Upload);
// Vue.use(Skeleton);
// Vue.use(Comment);
// Vue.use(ConfigProvider);
// Vue.use(Empty);
