// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {} // 用来存储用户信息的对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取用户信息
    wx.getUserInfo({
      success: (res) => {
        if(res.rawData){
          // 更新用户信息
          this.setData({
            userInfo:JSON.parse(res.rawData)
          })
        }
      }
    })


  },
  // 获取用户的信息
  getUser(event) {
    console.log(event)
    // 获取用户信息之前先做一个判断
    if (event.detail) {
      // 直接更新数据
      this.setData({
        userInfo: event.detail.userInfo
      })
    }
  },
  // 点击按钮跳转到列表的界面
  goList() {
    // 通过路由跳转的方法进行跳转页面
    wx.switchTab({
      url: '/pages/list/list'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})