import Vue from "vue";
import VueLazyload from "vue-lazyload";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import {
  Button,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  Dialog,
  Table,
  Tag,
  TableColumn,
  Upload,
  Menu,
  MenuItem,
  Submenu,
  Row,
  Col,
  Card,
  Progress,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Carousel,
  Timeline,
  TimelineItem,
  CarouselItem,
  Popconfirm,
  Input,
  Tree,
  RadioGroup,
  RadioButton
} from "element-ui";
import "./styles/element-variables.scss";
import "@/styles/index.scss";

import App from "./App";
import store from "./store";
import router from "./router";

// import "./icons";
import "./permission";
import "./utils/error-log";

import * as filters from "./filters";

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;

//#region
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dropdown);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Badge);
Vue.use(Dialog);
Vue.use(Table);
Vue.use(Tag);
Vue.use(TableColumn);
Vue.use(Upload);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Progress);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Carousel);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(CarouselItem);
Vue.use(Popconfirm);
Vue.use(Input);
Vue.use(Tree);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(VueLazyload);
//#endregion

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
