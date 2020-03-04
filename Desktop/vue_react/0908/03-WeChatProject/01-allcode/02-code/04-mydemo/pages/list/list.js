// 引入datas数据
const datas = require('../../datas/list-data.js')
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 定义一个状态数据(属性)用来存储引入的数据---数组
    datas:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在这里,界面加载的时候,就应该把数据缓存到状态数据中
    this.setData({
      datas: datas.list_data
    })
  },
  // 跳转到详情页
  goDetail(event){
    // console.log(event)
    const id = event.currentTarget.dataset.id
    // console.log(id)
    // 因为每个详情页进入后都可以返回来
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})