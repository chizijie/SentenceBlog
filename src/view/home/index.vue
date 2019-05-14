<template>
  <div class="home">
    <header-box
      :data="article[0]"
    ></header-box>
    <!--<nav @mouseover.stop>-->
      <!--<tag-box></tag-box>-->
    <!--</nav>-->
    <main>
      <article-title
        :data="article"
      ></article-title>
    </main>
    <div class="loading">
      正在为您加载更多
    </div>
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
      ],
      url: '',
      pag: 1,
      urlOff: true
    }
  },
  mounted () {
    let This = this
    window.addEventListener('scroll', function (e) {
      var Sroll = document.body.scrollHeight - document.body.offsetHeight - 1000
      var t = document.documentElement.scrollTop || document.body.scrollTop
      if (t >= Sroll && This.$store.state.homeUrlOff) {
        This.urlOff = false
        This.pag++
        console.log(This.$store.state.homeUrl)
        This.axios.get(This.url + This.pag)
          .then(function (res) {
            This.$store.state.homeUrlOff = true
            This.article.push(...res.data.posts)
            console.log(res.data.posts)
          })
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          })
      }
      console.log(t)
      console.log(Sroll)
    })
  },
  computed: {
    pudateData () {
      return this.$store.state.article
    },
    homeUrl () {
      return this.$store.state.homeUrl
    }
  },
  watch: {
    pudateData (to) {
      this.article = to
    },
    homeUrl (to) {
      this.pag = 1
      this.url = to
    }
  }
}
</script>

<style scoped lang="stylus">
  .loading
    width: max-content;
    padding: 5px 10px;
    border: 1px solid #eaeaea;
    margin: 100px auto 0;
    color: #898989;
  .home
    width 100%
    padding-bottom 100px
    position relative
    main
      width 1200px
      overflow hidden
      margin 0 auto
</style>
