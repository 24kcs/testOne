// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  // 相当于Vue中的data
  data: {
    msg:'如果每个人都是自觉地写代码,那他不香吗'
  },
  // 按钮的点击事件的回调函数,目前使用的是catchtap 点击事件=====changeMsg 回调函数
  // 回调函数在.js文件中书写,而且是和生命周期的回调是同一个级别来说书写
  // 在Vue中回调函数一般在methods对象中书写,微信小程序不一样
  // 小程序中没有DOM,小程序中没有数据代理
  // data对象,
   // 小程序中的生命周期函数使用onLoad更合适一些

  // 除了catchtap事件以外,还有啥子事件----事件冒泡及阻止事件冒泡的问题
  // 事件分为两种:事件冒泡和非事件冒泡
  // bindtap-----事件冒泡
  // catchtap----非事件冒泡

 
 
  changeMsg(){
    console.log('啊,我被点了')
    // document.getElementById('btn')
    // 点击按钮修改msg属性的值
    // this.msg='华哥好帅哦'
    // console.log(this)
    // React---中类似的写法
    // 用来修改data对象中的属性的值
    this.setData({
      msg:'健哥好秀气啊'
    })
  },

  // Vue中界面渲染完毕后做相关的操作,此时会用到mounted声明周期函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 可以获取到data对象中定义的数据
    console.log(this.data.msg)
    // debugger
    // 第一个
    console.log('onLoad')
  },
  // text标签的事件
  showMsg1() {
    console.log('1')
   },
   // view标签的事件
  showMsg2(){
    console.log('2')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 第三个
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 第二个
    console.log('onShow')
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