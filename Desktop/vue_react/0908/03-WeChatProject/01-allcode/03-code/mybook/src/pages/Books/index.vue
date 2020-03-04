<template>
  <div class="booksContainer">
    <div class="books_header">
      <swiper indicator-dots autoplay circular>
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
    </div>

    <div class="books_content">
      <span>全部商品</span>
      <span class="right" @click="goBookList">></span>
    </div>
    <ul class="books_list">
      <li v-for="(book,index) in books" :key="index">
        <img :src="book.image" alt />
        <p>《{{book.title}}》</p>
        <p>作者:{{book.author}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
// 引入datas数据
import datas from './datas/data.json'
export default {
  data () {
    return {
      books:[] // 用来存储书籍的信息
    }
  },
  mounted () {
    // 把引入进来数据更新到状态数据books数组中
    this.books = datas
    // console.log(this.books)
  },
  methods: {
    // 跳转到书籍的列表页
    goBookList(){
      console.log('跳转到书籍的列表页')
      wx.navigateTo({
        url: '/pages/BookList/main?books='+JSON.stringify(this.books)
      })
    }
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.booksContainer
  width 100%
  height 100%
  .books_header
    width 100%
    height 400rpx
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
  .books_content
    margin 10rpx
    span
      font-size 36rpx
      font-weight 700
      &.right
        color #02a774
        float right
  .books_list
    display flex
    flex-wrap wrap // 必要的时候要进行拆行
    li
      display flex
      flex-direction column
      align-items center
      width 50%
      border-bottom 1rpx solid #666
      box-sizing border-box  // 不支持盒子模型
      &:nth-child(2n+1)
        border-right 1rpx solid #666
      img
        width 170rpx
        height 170rpx
        margin 10rpx 0
      p
        font-size 32rpx
        margin 10rpx 0
</style>