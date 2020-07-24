<template>
  <div class="layout">
    <div class="wrap">
      <header class="center">
        <Header />
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.layout {
  min-width: 1480px;
  min-height: 100%;
}
</style>