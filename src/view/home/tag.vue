<template>
  <div class="tag">
    <div class="iconBox" @click="show2 = !show2">
      <i class="el-icon-c-scale-to-original"></i>
    </div>
    <transition name="el-zoom-in-top">
      <div class="Box" v-show="show2">
        <div class="tag transition-box" :style="tagBg">
        </div>
        <ul class="tagUl">
          <!--:class="{show : tagTxt}"-->
          <li
            ref="liBox"
            v-for="(item, index) in tagList"
            :key="index"
            @click="pudateArticele(item)"
          ><span>{{item.title}}{{item.post_count ? '[' + item.post_count + ']' : ''}}</span></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
      show2: false,
      tagTxt: false,
      tagList: []
    }
  },
  methods: {
    pudateArticele (data) {
      console.log(data)
      let id = data.id
      // txtBlog
      // http://120.78.175.25/wordpress
      this.axios.get(`/txtBlog/?json=get_categories_posts&categories_id=${id}`)
        .then(function (res) {
          // This.$store.state.article = res.data.posts
          console.log(res.data)
        })
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        })
    }
  },
  computed: {
    tagBg () {
      return 'background:' + this.$store.state.article[0].tags[0].title
    }
  },
  created () {
    let This = this
    // txtBlog
    // http://120.78.175.25/wordpress
    this.axios.get('/txtBlog/?json=get_category_index')
      .then(function (res) {
        This.tagList = res.data.categories
        This.tagList.unshift({title: '首页'})
        // This.$store.state.article = res.data.posts
        console.log(res.data.categories)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
  },
  watch: {
    show2 (to) {
      let This = this
      let li = this.$refs.liBox
      if (to) {
        // console.log(this.$refs.liBox)
        let Time
        let i = 0
        // setTimeout(() => {
        Time = setInterval(() => {
          if (i >= li.length - 1) {
            clearInterval(Time)
          }
          li[i].className = 'show'
          i++
        }, 200)
        This.tagTxt = to
      } else {
        li.forEach(el => {
          el.className = ''
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .tag
    position relative
    .iconBox
      background #fff
      padding 5px 10px 2px
      border 2px solid rgba(0, 0, 0, 0.58)
      border-radius 10px
      cursor pointer
      i
        font-size 30px;
    .Box
      width 170px
      height 1000px
      position absolute
      top -30px
      right 60px
      .tag
        position absolute
        top -30px
        right 60px
        width 170px
        height 1000px
        background  rgb(67, 26, 48)
        opacity .7
      .tagUl
        position absolute
        top -30px
        right 60px
        width 100%
        height 100%
        overflow hidden
        display flex
        flex-direction: column;
        justify-content center
        li
          position relative
          width 100%
          height 30px
          margin 20px 0
          font-size 18px;
          color: #fff
          text-align center
          top -30px
          right -119px
          transition .5s
          span
            display block
            width 100%
            transform:rotate(-13deg);
            cursor pointer
        li.show
          top 0
          right 0
        li.show:hover
          font-size: 24px;
@keyframes mymove{
  from {
    right: -5px
  }
  to {
    right: 0
  }
}
</style>
