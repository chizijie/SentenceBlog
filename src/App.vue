<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive && appOff">
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
    <transition name="fade">
      <div class="loadingBox" v-show="appLoading">
        <div class="Box">
          <loading-box></loading-box>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import LoadingBox from './components/loading'
export default {
  name: 'App',
  components: {
    LoadingBox
  },
  data () {
    return {
      appOff: true,
      page: 1,
      loading: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload () {
      this.appOff = false
      this.$nextTick(() => {
        this.appOff = true
      })
    }
  },
  computed: {
    appLoading () {
      return this.$store.state.appLoading
    }
  },
  created () {
    // 临时路由守卫
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      // this.re
      this.$router.replace('/m')
    } else {
      this.$router.replace('/')
    }
    let This = this
    // txtBlog
    // http://120.78.175.25/wordpress
    // 筛选文章 category_id:文章分类ID page：页码
    // http://120.78.175.25/wordpress/?json=get_category_posts&get_recent_posts&category_id=6&page=2
    this.axios.get(`${this.$store.state.ureHeader}?json=get_recent_posts&page=${this.page}`)
      .then(function (res) {
        // 首页的载入动画隐藏
        This.$store.state.appLoading = false
        // 把文章放到vux
        This.$store.state.article = res.data.posts
        // 开启下拉载入更多文章
        This.$store.state.homeUrlOff = true
        // 把该请求的链接，放到vuex，用于下拉载入更多文章的请求链接
        This.$store.state.homeUrl = `${This.$store.state.ureHeader}?json=get_recent_posts&page=`
        console.log(res.data.posts)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
  },
  watch: {
    $route (to) {
      // 用于检测后退，或是前进是否为缓存的组件，如果是缓存组件则不需要开启载入动画
      if (!to.meta.keepAlive) {
        // 只要有页面切换则启动载入动画
        this.$store.state.appLoading = true
      }
    }
  }
}
</script>

<style scoped>
  .loadingBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 8;
  }
  .Box{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
