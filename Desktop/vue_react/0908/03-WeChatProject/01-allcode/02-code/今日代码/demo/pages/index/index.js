// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 界面加载的时候获取用户信息
    wx.getUserInfo({
      success: (res) => {
        if (res.rawData) {
          this.setData({
            userInfo: JSON.parse(res.rawData)
          })
        }
      }
    })
  },
  // 点击按钮获取用户信息
  getUser(event) {
    if (event.detail) {
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