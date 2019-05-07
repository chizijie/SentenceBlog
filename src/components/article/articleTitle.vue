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
          <el-image :src="item.thumbnail_images.full.url" lazy></el-image>
          <!--<img width="680" height="440" :src="item.thumbnail_images.full.url" class="cover">-->
        </router-link>
        <div class="else">
          <p>
            {{item.date}}
          </p>
          <h3>
            <router-link
              :to="'/article/' + item.id"
            >{{item.title}}</router-link>
          </h3>
          <p v-html="item.excerpt"></p>
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
  li
    position: relative
    margin-top 100px
    height 444px
    a.imgBox
      display: inline-block;
      width: 680px;
      height: 440px;
      overflow: hidden;
      position: relative;
      z-index: 3;
      top 0px
      transition .5s
      img
        position: relative
        display: block;
        max-width: 100%;
        width 680px
        height 440px;
        top: 0
        transition .5s
    .else
      position: absolute;
      background: #fff;
      text-align: left;
      top: 20px;
      height: 398px;
      width: 498px;
      border: 1px solid #eaeaea;
    .else p:first-child
      color: #999;
      font-size: 12px;
      margin: 80px 0 0 80px;
    .else h3
      font-size: 30px;
      line-height: 1.1;
      margin: 10px 100px 0 80px
      font-weight 400
      a
        color: #333;
    .else h3 + p
      color: #555;
      margin: 10px 100px 0 80px;
      font-size: 14px;
      line-height: 1.8
    .here
      position: absolute;
      left: 82px;
      bottom: 80px;
      color: #999;
      font-size: 13px
      span
        margin-right 10px
  li:nth-child(even)
    text-align: right
    a.imgBox
      right 0px
  li:nth-child(odd)
    text-align: left
    a.imgBox
      left 0px
  li:nth-child(odd) .else
    left: 660px
  li:nth-child(even) .else
    right: 660px
  li:nth-child(odd):hover a.imgBox
    left 20px
    height 400px
    top 20px
    img
      top -20px
  li:nth-child(even):hover a.imgBox
    right: 20px
    height: 400px
    top 20px
    img
      top -20px
</style>
