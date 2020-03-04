<template>
  <div class="firstContainer">
    <swiper :indicator-dots="current!==3" autoplay @change="changeIndex">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt />
      </swiper-item>
    </swiper>
    <button class="btn" v-show="current===3" @click="goBooks">开启体验</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0 // 轮播图显示图片的索引值
    }
  },
  methods: {
    // 轮播图的图片切换的时候,该事件就会触发
    changeIndex (event) {
      // 更新状态数据
      // 图片每次轮播的时候,获取到当前的事件参数对象,内部有current值
      this.current = event.mp.detail.current
    },
    // 跳转到Books界面
    goBooks (){
      wx.switchTab({
        url: '/pages/Books/main'
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.firstContainer
  width 100%
  height 100%
  position relative
  swiper
    width 100%
    height 100%
    img
      width 100%
      height 100%
  .btn
    width 200rpx
    height 80rpx
    color white
    background rgba(0, 0, 0, 0.3)
    position absolute
    left 50%
    bottom 30rpx
    margin-left -100rpx
</style>
