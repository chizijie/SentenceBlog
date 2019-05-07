<template>
  <header ref="headerHei" @mousemove="aa($event)" @mouseover="ss($event)">
    <nav @mouseover.stop>
      <tag-box></tag-box>
    </nav>
    <div class="markTxt" @mouseover.stop>
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
    <div class="mark" @mouseover.stop :style="'border-color:transparent transparent' + data.tags[0].title + data.tags[0].title">
    </div>
    <div class="Box" ref="Box">
      <img :src="data.thumbnail_images.full.url" alt="">
    </div>
  </header>
</template>

<script>
import tagBox from './tag'
export default {
  name: 'HeaderBox',
  components: {
    tagBox
  },
  props: {
    data: {
      default: {
        title: '文章载入中...',
        date: '日期载入中...',
        excerpt: '文章载入中...',
        thumbnail: 'https://isujin.com/wp-content/uploads/2018/05/wallhaven-633714.jpg',
        thumbnail_images: {
          full: {
            url: 'https://isujin.com/wp-content/uploads/2018/05/wallhaven-633714.jpg'
          }
        }
      }
    }
  },
  methods: {
    aa (ev) {
      let X = ev.clientX - document.documentElement.clientWidth / 2
      let Y = ev.clientY - document.documentElement.clientHeight / 2
      if (X > 0) {
        X = '-' + (ev.clientX - document.documentElement.clientWidth / 2)
      } else {
        X = String(ev.clientX - document.documentElement.clientWidth / 2).split('-')[1]
      }
      if (Y > 0) {
        Y = '-' + (ev.clientY - document.documentElement.clientHeight / 2)
      } else {
        Y = String(ev.clientY - document.documentElement.clientHeight / 2).split('-')[1]
      }
      this.$refs.Box.style.transform = 'translate3d(' + X / 10 + 'px, ' + Y / 10 + 'px, 0px)'
      let This = this
      setTimeout(() => {
        This.$refs.Box.style.transition = '0s'
      }, 200)
    },
    ss () {
      this.$refs.Box.style.transition = '.1s'
    }
  },
  mounted () {
    let hei = document.documentElement.clientHeight + 'px'
    this.$refs.headerHei.style.height = hei
    // this.aa(event)
  }
}
</script>

<style scoped lang="stylus">
header
  width 100%
  background #ffe1e1
  overflow hidden
  position relative
  nav
    position absolute
    top 30px
    right 30px
    z-index 6
  .Box
    width 120%
    height 110%
    position relative
    img
      width 2200px
      position absolute
      top 0
      left -300px
      right 0
      bottom 0
      margin auto
      max-width: none;
  .mark
    position absolute
    top -200px
    left -150px
    z-index 5
    height 0
    width 0
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-color:transparent transparent rgb(176, 14, 36) rgb(176, 14, 36);
    border-style:solid solid solid solid;
    border-width:200px 900px 1000px 500px;
    opacity .7
  .markTxt
    position absolute
    width 74%
    top 50%
    left 10%
    z-index 6;
  .markBox
    color #fff
    width 35%
    .date
      font-size 12px
    h2
      font-size 28px
      font-weight 400
      margin-top 15px
      cursor pointer
    .txt
      margin-top 30px
      font-size 14px
</style>
