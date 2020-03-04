<template>
  <div class="bookListContainer">
    <ul>
      <li v-for="(book,index) in books" :key="index" @click="goDetail(book,index)">
        <img :src="book.image" alt="">
        <div class="books_content">
          <p>《{{book.title}}》</p>
          <p>作者:{{book.author}}</p>
          <p>{{book.publisher}}</p>
        </div>
        <span class="price">{{book.price}}元</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [] // 用来书籍信息数据
    }
  },
  mounted() {
    // 获取传递过来的数据
   //  console.log(this)
    // this.$mp.query.books
    // 判断,数据是否传递过来了
    if (this.$mp.query.books) {
      // console.log(this)
      // 更新状态数据
      this.books = JSON.parse(this.$mp.query.books)
      console.log(this.books)
    }
  },
  methods: {
    // 跳转到详情页
    goDetail(book,index){
      wx.navigateTo({
        url: `/pages/Detail/main?book=${JSON.stringify(book)}&index=${index}`
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.bookListContainer
  width 100%
  display flex
  ul
    width 100%
    li
      width 100%
      display flex
      border-bottom 1rpx solid #666
      padding 10rpx
      img
        width 140rpx
        height 140rpx
      .books_content
        width 58%
        margin-left 10rpx
        p
          font-size 36rpx
      .price
        color red
        font-size 36rpx
        font-weight 700
      
</style>
