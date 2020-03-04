// pages/detail/detail.js
// 先获取数据
const datas = require('../../datas/list-data.js')
let backgroundAudioManager = wx.getBackgroundAudioManager()
// 获取全局唯一指定对象
const appData = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}, // 存储对象数据
    index: null, // 存储索引
    isCollectioned: false, // 默认没有收藏
    isPlay: false // 默认没有播放
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(options)
    // 获取索引
    const index = options.id
    // 设置状态数据
    this.setData({
      detail: datas.list_data[index],
      index
    })
    // console.log(index,this.data.detail)
    // 界面加载读取缓存数据,根据键的方式
    let storageObj = wx.getStorageSync('isCollectioned')
    // 判断是否有缓存数据的对象
    if (!storageObj) {
      // 没有数据,默认设置一个空对象
      storageObj = {}
      wx.setStorage({
        key: 'isCollectioned',
        data: storageObj
      })
    } else {
      // 缓存数据存在,根据索引来获取布尔值,重新设置状态数据
      let isCollectioned = storageObj[index]
      // 判断如果为true则重新设置,否则不必设置
      if (isCollectioned) {
        this.setData({
          isCollectioned
        })
      }
    }


    // 音乐缓存的获取及设置
    // 先判断播放状态和存储的索引值
    if (appData.data.musicPlay && appData.data.pageIndex === index) {
      // 开始播放音乐
      this.setData({
        isPlay: true
      })
    }

    // 播放的时候立刻更新缓存的播放状态和索引
    backgroundAudioManager.onPlay(() => {
      // 更新全局播放状态
      this.setData({
        isPlay: true
      })
      appData.data.musicPlay = true
      appData.data.pageIndex = index
    })
    // 暂停的监视
    backgroundAudioManager.onPause(() => {
      this.setData({
        isPlay: false
      })
      appData.data.musicPlay = false
    })
  },

  playMusic() {
    let isPlay = !this.data.isPlay
    // 设置状态数据
    this.setData({
      isPlay
    })

    // 推荐使用新的api
    if (isPlay) {
      const {
        dataUrl,
        title,
        coverImgUrl
      } = this.data.detail.music
      // 地址
      backgroundAudioManager.src = dataUrl
      // 标题
      backgroundAudioManager.title = title
      // 封面
      backgroundAudioManager.coverImgUrl = coverImgUrl
      // 播放
      backgroundAudioManager.play()
    } else {
      // 暂停
      backgroundAudioManager.pause()
    }


    // 判读当前的播放状态
    // if(isPlay){
    //   // 获取播放音乐的数据
    //   const { dataUrl, title, coverImgUrl} =this.data.detail.music
    //   wx.playBackgroundAudio({
    //     dataUrl,
    //     title,
    //     coverImgUrl
    //   })
    // }else{
    //   wx.pauseBackgroundAudio({

    //   })
    // }
  },
  // 收藏或者取消收藏
  handleCollection() {
    // 读取状态数据取反
    let isCollectioned = !this.data.isCollectioned
    // 获取文字提示内容
    let title = isCollectioned ? '收藏成功' : '取消收藏'
    // 设置提示信息
    wx.showToast({
      title,
      icon: 'success'
    })
    let obj = wx.getStorageSync('isCollectioned')
    // 索引对应布尔值,再以键值对的方式进行存储
    obj[this.data.index] = isCollectioned
    // 缓存数据
    wx.setStorage({
      key: 'isCollectioned',
      data: obj
    })

    // 设置状态数据
    this.setData({
      isCollectioned
    })
  },

  // 朋友圈
  handleShare(){
    // 分享
    wx.showActionSheet({
      itemList:[
        '分享朋友圈',
        '分享给好友',
        '分享给11'
      ],
      success(res){
        if (res.tapIndex){
          console.log('已经分享给好友了')
        }
      }
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