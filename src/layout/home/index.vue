<template>
  <div class="layout">
    <div class="wrap">
      <header class="center">
        <Header />
      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.layout {
  min-width: 1480px;
  min-height: 100%;
}
</style>