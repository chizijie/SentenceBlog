<template>
  <div class="music">
    <div class="btn">
      <i
        class="iconfont icon-bofang"
        @click="musicPlay(true)"
        v-show="!play"
      ></i>
      <i
        class="iconfont icon-zanting"
        @click="musicPlay(false)"
        v-show="play"
      ></i>
    </div>
    <div
      class="musicShow"
      :style="'width:' + jdtData + '%'"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      Time: '',
      jdtData: '',
      play: true
    }
  },
  methods: {
    musicPlay (off) {
      this.play = off
      let music = document.getElementsByTagName('audio')[0]
      if (off) {
        music.play()
      } else {
        music.pause()
      }
    }
  },
  mounted () {
    let This = this
    let music = document.getElementsByTagName('audio')[0]
    console.log(music)
    music.addEventListener('canplay', function () {
      // music.play()
      This.play = true
      if (This.Time === '') {
        This.Time = setInterval(() => {
          This.jdtData = music.currentTime / music.duration * 100
        }, 200)
      }
    })
    // music.addEventListener('ended', function () {
    //   music.load()
    // })
  }
}
</script>

<style scoped lang="stylus">
  .music
    height 50px
    border-bottom 1px solid #f7f7f7
    width 100%
    position relative
    margin-bottom 50px
    .musicShow
      height 100%
      background rgba(0, 0, 0, .07)
    .btn
      position absolute
      width 30px
      height 30px
      top calc(50% - 15px)
      left 10px
      i
        cursor pointer
</style>
