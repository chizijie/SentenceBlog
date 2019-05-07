<template>
  <div class="home">
    <header-box
      :data="article[0]"
    ></header-box>
    <main>
      <article-title
        :data="article"
      ></article-title>
    </main>
  </div>
</template>

<script>
import HeaderBox from './HeaderBox'
import articleTitle from '../../components/article/articleTitle'
export default {
  name: 'index',
  components: {
    HeaderBox,
    articleTitle
  },
  data () {
    return {
      article: [
        {
          tags: [{}],
          thumbnail_images: {
            full: {
              url: 'https://isujin.com/wp-content/uploads/2018/05/wallhaven-633714.jpg'
            }
          }
        }
      ]
    }
  },
  created () {
    let This = this
    // txtBlog
    // http://120.78.175.25/wordpress
    this.axios.get('/txtBlog/?json=1')
      .then(function (res) {
        This.article = res.data.posts
        console.log(res.data.posts)
        // 控制台打印请求成功时返回的数据
        // bind(this)可以不用
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
          // 控制台打印错误返回的内容
        }
        // bind(this)可以不用
      })
  }
}
</script>

<style scoped lang="stylus">
  .home
    width 100%
    padding-bottom 100px
    main
      width 1200px
      overflow hidden
      margin 0 auto
</style>
