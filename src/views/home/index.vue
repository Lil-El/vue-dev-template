<template>
  <div>
    <Input ref="x" />
    <Input ref="y" />
    <Input ref="z" />
  </div>
</template>
<script>
import Input from '@/components/Input'
export default {
  components: {
    Input
  },
  mounted() {
    console.log(this.$refs.x.getInput())
    console.log(this.$refs.y.getInput())
    console.log(this.$refs.z.getInput())
  }
}
</script>
