<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
    wx.login({
      success: res => {
        console.log('login返回数据', res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       console.log('用户已授权', res);
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           console.log('获取用户信息..', res);

    //           // 可以将 res 发送给后台解码出 unionId
    //           getApp().globalData.userInfo = res.userInfo;
    //           wx.switchTab({
    //             url: 'pages/index/main'
    //           });
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res);
    //           }
    //         }
    //       });
    //     } else {
    //       console.log('没有用户授权');
    //     }
    //   }
    // });
  }
};
</script>

<style>
</style>
