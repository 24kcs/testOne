/**
 * 
 * 1. 微信小程序:无需安装,用完即走的应用(张小龙)
 * 2. 发布的时候是不能超过2M的
 * 3. 发布的时间:2017年1月9日0点
 * 4. 小程序中推荐使用flex布局
 * 5. 1rpx=1物理像素=0.5px
 * 6. 小程序中的文件的意义
 * .wxml  相当于html文件----html代码
 * .wxss  相当于css文件----css代码
 * .js    相当于平时的交互功能的js文件---js代码
 * .json  配置文件
 * 
 * 7. 组件化开发,以组件的方式进行开发
 *  所有的组件都有4个文件,放在该组件的同名目录中(所有的组件目录都放在pages目录中)
 * pages目录中的每个目录就是一个page-----就相当于是一个页-----组件
 * 每个page中最终都有一个page标签
 * 8. 小程序中没有DOM,没有数据代理,如果需要设置数据,那么使用的是this.setData({属性:值})
 * 9. 小程序中也有自己的生命周期,在Vue中如果界面渲染完毕后做相关的操作代码一般在mounted生命周期函数中书写,在微信小程序中一般在onLoad函数中书写即可
 * 10. 小程序中的事件对应的回调函数一般在对应的js文件中和生命周期的函数同一级别的位置书写即可
 * 11. 小程序中的路由的跳转
 *   wx.redirectTo({}) --- 跳转后没有返回
 *   wx.navigateTo({}) ---跳转后有返回
 * 12. 小程序中可以使用模版
 *  小程序中的模版一般指的是 html和css两个文件组成的模版
 *  模版在使用的时候要注意:
 *  模版要有自己的name属性
 *  使用模版的时候需要使用 is 属性="模版的名字"
 *  引入模版html:
 *  <import src="模版路径.wxml"" />
 *  引入模版的css
 *  @import '模版路径.wxss';
 * 
 * 
 * 
 */
App({
  data:{
    musciPlay: false, // 用来存储音乐的播放状态
    pageIndex:null // 用来存储播放音乐的详情页的索引值(详情页是通过列表项点击进入的,传入了索引)
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})