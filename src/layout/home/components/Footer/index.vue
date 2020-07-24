<template>
  <div class="footer">
    <div class="container center">
      <div class="inner">
        <div class="left">
          <template v-for="mod in mods">
            <Mod :key="mod.name" :content="mod" />
          </template>
        </div>
        <div class="right"></div>
      </div>
      <div
        class="copyright"
      >Copyright © 2019-2020 山东天元信息-西安研发中心,陕ICP备xxxxxxxx号, All Rights Reserved。</div>
    </div>
  </div>
</template>
<script>
import Mod from "../Mod/index";
export default {
  components: { Mod },
  data() {
    return {
      mods: [
        {
          name: "合作伙伴",
          children: [
            {
              name: "百度",
              url: "www.baidu.com",
            },
          ],
        },
        {
          name: "合作伙伴1",
          children: [
            {
              name: "百度1",
              url: "www.baidu.com",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: #27303f;
  padding: 40px 0 30px;
  .copyright {
    font-size: 12px;
    color: #ccc;
    width: 100%;
    padding-top: 30px;
    border-top: 1px solid #313b4c;
  }
}
.left {
  display: flex;
  justify-content: space-around;
}
</style>