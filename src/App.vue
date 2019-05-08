<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive && appOff">
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
    <div class="loading">
      正在为您加载更多
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      appOff: true,
      page: 1
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
        This.$store.state.homeUrlOff = true
        This.$store.state.article = res.data.posts
        This.$store.state.homeUrl = `${This.$store.state.ureHeader}?json=get_recent_posts&page=`
        console.log(res.data.posts)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
</script>

<style>
  .loading {
    width: max-content;
    padding: 5px 10px;
    border: 1px solid #eaeaea;
    margin: 0 auto;
    color: #898989;
  }
</style>
