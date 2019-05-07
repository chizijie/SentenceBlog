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
  computed: {
    pudateData () {
      return this.$store.state.article
    }
  },
  watch: {
    pudateData (to) {
      this.article = to
    }
  }
}
</script>

<style scoped lang="stylus">
  .home
    width 100%
    padding-bottom 100px
    position relative
    main
      width 1200px
      overflow hidden
      margin 0 auto
</style>
