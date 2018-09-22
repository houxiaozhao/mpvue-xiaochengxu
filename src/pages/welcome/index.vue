<template>
  <div>
    <button open-type="getUserInfo" type="primary" lang="zh_CN" @getuserinfo="onGotUserInfo">授权</button>
  </div>
</template>
<script>
const app = getApp();
export default {
  name: 'index',
  data() {
    return {
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    };
  },
  methods() {},
  mounted() {
    wx.getUserInfo({
      success: res => {
        console.log('获取用户信息.....', res);
        this.globalData.userinfo = res.userInfo;
        wx.switchTab({
          url: './../../pages/index/main' // 这个地方很奇怪，写 url: 'pages/index/main'，会报错，不能跳到首页
        });
      },
      fail: res => {
        console.log('没有获取用户信息');
        if (this.canIUse) {
          console.log('没有用户信息');
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          app.userInfoReadyCallback = res => {
            console.log('回调里得到用户信息', res.userInfo);
            this.globalData.userinfo = res.userInfo;
            wx.switchTab({
              url: 'pages/index/main'
            });
          };
        } else {
          console.log('低版本微信');
          // 在没有 open-type=getUserInfo 版本的兼容处理
          wx.getUserInfo({
            success: res => {
              console.log('得到用户信息', res.userInfo);
              this.globalData.userinfo = res.userInfo;
              wx.switchTab({
                url: 'pages/index/main'
              });
            }
          });
        }
      }
    });
  },
  methods: {
    onGotUserInfo: function(e) {
      console.log('用户授权中得到用户信息', e.mp.detail.userInfo);
      this.globalData.userinfo = e.mp.detail.userInfo;
      wx.switchTab({
        url: '../../pages/index/main'
      });
    }
  }
};
</script>
