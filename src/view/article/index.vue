<template>
  <div class="article">
    <div
      class="t"
      :style="'width:' + tShow + '%'"
    ></div>
    <music-box v-if="musicShow"></music-box>
    <main>
      <div class="Title">
        <h1>
          {{data.title}}
        </h1>
        <div class="stuff">
          <span>{{data.date}}</span>
        </div>
      </div>
      <div
        class="wrap"
        v-html="data.content"
      ></div>
    </main>
  </div>
</template>

<script>
import musicBox from './music'
export default {
  name: 'index',
  components: {
    musicBox
  },
  data () {
    return {
      data: {},
      musicShow: false,
      tShow: 0
    }
  },
  created () {
    let This = this
    let id = this.$route.params.id
    console.log(id)
    this.axios.post(`/txtBlog/?p=${id}&json=1`)
      .then(function (res) {
        This.data = res.data.post
        This.musicShow = true
        console.log(res.data.post)
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
  },
  mounted () {
    window.scrollTo(0, 0)
    let This = this
    window.addEventListener('scroll', function (e) {
      let t = document.documentElement.scrollTop || document.body.scrollTop
      var Sroll = document.body.scrollHeight - document.body.offsetHeight
      This.tShow = t / Sroll * 100
      // console.log(t / Sroll * 100)
    })
  }
}
</script>

<style scoped lang="stylus">
  .article
    position relative
    .t
      height 4px
      width 0%
      background #b00e24
      transition .5s
      position fixed
      top 0
      left 0
    main
      width 700px
      margin 0 auto
      h1
        font-size 30px
        color #333
        line-height 1.3
        margin-bottom 10px
      .wrap
        overflow hidden
        h2
          font-size 14px
        p
          text-indent 2rem
</style>
