<template>
  <div>
    <button type="default" open-type="share">自定义分享</button>
    <button type="default" @click="navigate">跳转</button>
    <i class="fa fa-camera-retro"></i> fa-camera-retro
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  components: {},
  methods: {
    navigate() {
      wx.navigateTo({
        url: '/pages/index/index2/main?id=111'
      });
    }
  },
  mounted() {
    console.log(this.$root.$mp.appOptions);
    console.log(this.globalData.userinfo);
  },
  created() {},
  onLoad() {},
  onShareAppMessage(e) {
    console.log(e);
    return {
      title: 'Adipisci fuga tenetur commodi incidunt occaecati voluptates voluptates ea et.',
      path: '/pages/index/main?id=123',
      imageUrl: 'http://obr4xf51d.bkt.clouddn.com/17-12-27/95156210.jpg'
    };
  }
};
</script>

<style scoped>
</style>
