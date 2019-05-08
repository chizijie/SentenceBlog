<template>
  <header ref="headerHei" :style="'background-image: url(' + data.thumbnail_images.full.url + ')'">
    <div class="mark" :style="'background-color:' +  data.tags[0].title"></div>
    <div class="markTxt">
      <div class="markBox">
        <p class="date">{{data.date}}</p>
        <router-link
          tag="h2"
          :to="'/article/' + data.id"
        >
          {{data.title}}
        </router-link>
        <div class="txt" v-html="data.excerpt"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBox',
  computed: {
    data () {
      return this.$store.state.article[0]
    }
  },
  mounted () {
    let hei = document.documentElement.clientHeight + 'px'
    this.$refs.headerHei.style.height = hei
  }
}
</script>

<style scoped lang="stylus">
  header
    position relative
    background-color rgba(0, 0, 0, 0.3)
    background-position center
    background-size cover
    .mark
      position absolute
      background-color rgb(0, 0, 0)
      opacity .3
      top 0
      left 0
      width 100%
      height 100%
    .markTxt
      position absolute
      width 70%
      bottom 20px
      left 20px
      z-index 2
      color #fff
      .date
        margin-bottom 4px
      h2
        font-size 20px
      .txt
        margin 10px 20px 0 0
</style>
