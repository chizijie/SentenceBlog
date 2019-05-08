<template>
  <div class="articleTitle">
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        v-if="index > 0"
      >
        <router-link
          href=""
          class="imgBox"
          :to="'/article/' + item.id"
        >
          <!--<el-image :src="item.thumbnail_images.full.url" lazy></el-image>-->
          <img width="680" height="440" :src="item.thumbnail_images.full.url" class="cover">
        </router-link>
        <div class="else">
          <p class="date">
            {{item.date}}
          </p>
          <h3>
            <router-link
              :to="'/article/' + item.id"
            >{{item.title}}</router-link>
          </h3>
          <p v-html="item.excerpt" class="conten"></p>
          <p class="here">
            <span>0</span><span>0</span><span>0</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'articleTitle',
  props: ['data']
}
</script>

<style scoped lang="stylus">
  .articleTitle
    position relative
    z-index 3
    li
      width 100%
      margin-top 60px
      padding-bottom 30px
      .else
        background #fff
        padding 0 27.5px
        border-bottom 1px solid #eaeaea
        .date
          padding-top 30px
          color #999
        h3
          font-size 24px
          font-weight 400
          margin-top 10px
          a
            color #333
        .conten
          margin-top 10px
        .here
          margin 20px 0
          span
            margin-right 20px
</style>
