import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  // 定义数据
  state: {
    article: [{
      thumbnail_images: {
        full: {
          url: 'https://isujin.com/wp-content/uploads/2018/05/wallhaven-633714.jpg'
        }
      },
      tags: [{}]
    }],
    // /txtBlog/
    // http://120.78.175.25/wordpress/
    ureHeader: 'http://120.78.175.25/wordpress/',
    // 该值用于限制页面刷新的时候，首页进行请求，请求成功之后滚动条跳动，请求第二页的文章
    homeUrlOff: false,
    appLoading: true,
    homeUrl: ''
  },
  // 修改state数据，也是唯一能修改state数据的方法
  mutations: {
    // 定义的方法，参数一: 行参，填入任何字母都可以。  参数二: 传参。
    updatearticle (state, upadte) {
      state.article.push(...upadte)
    }
  },
  // 类似于计算属性
  getters: {
    totals (state) {
      return state.p
    }
  },
  // 异步操作，数据请求和定时器必须放在这里执行
  // 在单页面调用：this.$store.dispatch('updateActions', 10)
  actions: {
    updateActions (state, upadte) {
      setTimeout(() => {
        // 触发在vuex定义的方法
        state.commit('updateP', upadte)
      }, 1000)
    }
  }
})
// 把vuex暴露出去
export default store
