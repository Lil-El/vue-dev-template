<template>
  <div class="header">
    <div class="logo">
      <img src="http://www.zhongguotianyuan.com/images/tincher.png" alt />
    </div>
    <div>
      <el-menu
        :default-active="$route.name"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleMenu"
      >
        <el-menu-item index="Home">首页</el-menu-item>
        <el-submenu index="Department">
          <template slot="title">部门简介</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item index="Scheme">page</el-menu-item>
      </el-menu>
    </div>
    <div class="profile">
      <Avart v-show="hasLogin"></Avart>
      <el-menu v-show="!hasLogin" class="el-menu-demo" mode="horizontal" @select="handleMenu">
        <el-menu-item index="Login">登录</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
import Avart from "@/components/Avart";
import { getToken } from "@/utils/auth";
export default {
  components: { Avart },
  data() {
    return { hasLogin: false };
  },
  created() {
    this.hasLogin = getToken() || false;
    console.log("hasLogin:", this.hasLogin);
  },
  methods: {
    handleMenu(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    height: 40px;
    margin: 0 10px;
    img {
      height: inherit;
    }
  }
  .profile {
    position: absolute;
    right: 0px;
  }
}
</style>