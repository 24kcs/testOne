// pages/detail/detail.js
const data = require('../../datas/list-data.js')
// 获取全局唯一的后台播放的对象
let backgroundAudioManager = wx.getBackgroundAudioManager()
// 获取全局的唯一指定对象
const appDate = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用来存储对象的
    detail: {},
    index: null, // 用来存储索引的
    isCollectioned: false, // 默认是没有收藏,如果为true则表示收藏成功
    isPlay: false // 设置播放或者是暂停的图片的状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取路由跳转的时候传入的参数数据(该参数数据中存储的是索引值)
    const index = options.id
    // 设置状态数据
    this.setData({
      detail: data.list_data[index], // 根据索引获取当前数组中对应的对象
      index // 存储索引
    })
    // console.log(this.data.detail)
    //  界面加载的时候应该先读取当前的收藏的状态数据值---->立刻设置当前界面的收藏状态
    // 从缓存中读取数据---按照键的方式来获取缓存数据
    let storageObj = wx.getStorageSync('isCollectioned')
    // 先判断是否能够读取到缓存数据
    if (!storageObj) {
      // 没有缓存数据
      storageObj = {}
      // 直接写入到缓存数据中
      wx.setStorage({
        key: 'isCollectioned',
        data: storageObj
      })
    } else {
      // 有缓存数据
      // { isCollectioned:{索引值:状态}}
      // { isCollectioned: { 1: true } }
      let isCollectioned = storageObj[index]
      // 如果为true则重新设置,否则不必设置
      if (isCollectioned) {
        this.setData({
          isCollectioned
        })
      }
    }
    // 音乐缓存,及播放按钮的图片显示播放还是暂停的效果
    // 音乐的监视操作
    if (appDate.data.musciPlay && appDate.data.pageIndex === index) {
      // 开始播放音乐
      this.setData({
        isPlay: true
      })
    }
    // 播放的时候立刻更新缓存的播放状态和索引---事件
    // 监听音乐播放的事件
    backgroundAudioManager.onPlay(() => {
      // 更新播放的状态----isPlay
      this.setData({
        isPlay: true
      })
      // 更新全局唯一对象中data对象中的播放状态
       appDate.data.musciPlay=true 
      // 更新索引值
       appDate.data.pageIndex=index
    })
    // 监听音乐暂停的事件
    backgroundAudioManager.onPause(() => {
      // 更新播放的状态---isPlay
      this.setData({
        isPlay: false
      })
      // 更新全局唯一对象中data对象中的播放状态
       appDate.data.musciPlay = false
      // 更新索引值
      // appDate.data.pageIndex = index
    })






    // 每次点击图片,设置收藏的时候,都会重新的产生一个对象,导致之前的数据丢失了



  },
  // 播放和暂停音乐
  playMusic() {
    // 先获取播放的状态
    let isPlay = !this.data.isPlay
    // 设置一下状态数据
    this.setData({
      isPlay
    })
    // 判断isPlay数据值是true还是false
    // 如果是true说明播放音乐
    // 如果是false说明暂停音乐

    if (isPlay) {
      const {
        dataUrl,
        title,
        coverImgUrl
      } = this.data.detail.music
      // 设置播放音乐的路径
      backgroundAudioManager.src = dataUrl
      // 设置音乐的标题
      backgroundAudioManager.title = title
      // 设置音乐封面的
      backgroundAudioManager.coverImgUrl = coverImgUrl
      // 播放音乐
      backgroundAudioManager.play()

    } else {
      // 暂停的方法
      backgroundAudioManager.pause()

    }


    // if (isPlay) {
    //   const {
    //     dataUrl,
    //     title,
    //     coverImgUrl
    //   } = this.data.detail.music
    //   // 播放的方法
    //   wx.playBackgroundAudio({
    //     dataUrl,
    //     title,
    //     coverImgUrl
    //   })
    // } else {
    //   // 暂停的方法
    //   wx.pauseBackgroundAudio({})
    // }
  },

  // 收藏和取消收藏
  handleCollectioned() {
    // 获取data对象中的数据然后取反
    let isCollectioned = !this.data.isCollectioned
    // 获取文字提示的信息内容
    let title = isCollectioned ? '收藏成功' : '取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    })
    // 缓存的收藏效果-----缓存的Api
    // 当前这个详情页的收藏成功或失败的动态的数据---- isCollectioned 值  true false
    let obj = wx.getStorageSync('isCollectioned')
    obj[this.data.index] = isCollectioned

    // obj--->{索引:状态值}
    wx.setStorage({
      key: 'isCollectioned',
      data: obj
    })

    // 设置状态数据的值
    this.setData({
      isCollectioned
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