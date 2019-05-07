<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    let This = this
    // txtBlog
    // http://120.78.175.25/wordpress
    this.axios.get('/txtBlog/?json=1')
      .then(function (res) {
        This.$store.state.article = res.data.posts
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
</style>
