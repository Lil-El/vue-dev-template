<template>
  <div>
    <Input ref="x" v-model="val" />
    <Input ref="y" />
    <Input ref="z" />
  </div>
</template>
<script>
import Input from "@/components/Input";
export default {
  components: {
    Input,
  },
  data() {
    return {
      val: 123,
    };
  },
  mounted() {
    console.log(this.$refs.x.getInput());
    console.log(this.$refs.y.getInput());
    console.log(this.$refs.z.getInput());
  },
};
</script>
