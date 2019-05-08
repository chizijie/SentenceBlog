<template>
  <div class="phone">
    <header-box></header-box>
    <article-box :data="data"></article-box>
  </div>
</template>

<script>
import headerBox from './HeaderBox'
import articleBox from '../../../components/article/phone'
export default {
  name: 'index',
  components: {
    headerBox,
    articleBox
  },
  data () {
    return {
      pag: 1,
      url: '',
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
            This.$store.state.article.push(...res.data.posts)
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
    data () {
      return this.$store.state.article
    },
    homeUrl () {
      return this.$store.state.homeUrl
    }
  },
  watch: {
    homeUrl (to) {
      this.pag = 1
      this.url = to
    }
  }
}
</script>

<style scoped lang="stylus">
  .phone
    position relative
  .phone::before
    content ""
    display block
    position absolute
    width 1px
    height 100%
    background #eaeaea
    left calc(50% - 1px)
</style>
