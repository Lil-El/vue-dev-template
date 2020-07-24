<template>
  <div class="title">
    <span>{{$props.text}}</span>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    require: true,
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>