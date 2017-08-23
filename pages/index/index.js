//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello Wrold 微信小程序',
    motto2:'阿达是多久啊刷机大师基督教阿萨德看见爱上考虑',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
