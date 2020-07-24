<template>
  <div class="mod-wrap">
    <dl>
      <dt>{{links.name}}</dt>
      <template v-for="link in links.children">
        <dd :key="link.name">
          <a :href="link.url">{{link.name}}</a>
        </dd>
      </template>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    content: Object,
  },
  data() {
    return {
      links: {},
    };
  },
  created() {
    this.links = this.$props.content;
  },
};
</script>
<style lang="scss" scoped>
.mod-wrap {
  color: #ccc;
  margin: 0 30px 30px 0;
  dl {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    dt {
      font-size: 17px;
      margin-bottom: 8px;
    }
    dd {
      margin: 0;
      height: 27px;
      a {
        font-size: 12px;
        line-height: 27px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>