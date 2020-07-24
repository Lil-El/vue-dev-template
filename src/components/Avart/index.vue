<template>
  <div>
    <el-dropdown class="avatar-container right-item" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar" />
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/uc/profile">
          <el-dropdown-item>个人中心</el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click.native="logout">
          <span style="display:block;">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["avatar"]),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.right-item {
  display: inline-block;
  padding: 0 8px;
  height: 100%;
  font-size: 18px;
  color: #5a5e66;
  vertical-align: text-bottom;
}
.avatar-container {
  cursor: pointer;
  margin-right: 30px;
  .avatar-wrapper {
    margin-top: 5px;
    position: relative;
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: -16px;
      top: 16px;
      font-size: 12px;
    }
  }
}
</style>