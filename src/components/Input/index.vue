<template>
  <div>Input:<input :ref="refInput" type="text" /></div>
</template>

<script>
export default {
  data() {
    return {
      refInput: "null",
    };
  },
  mounted() {
    console.log(this.$attrs.value);
  },
  methods: {
    getInput() {
      return this.$refs[this.refInput];
    },
  },
};
</script>

<style>
</style>
