# Vueforme

`王安安`

`技术之所以不断更新迭代 是因为总有一些人想弄些黑科技出来`

#### 1. 初始化一个vue项目

```
   npm install-g vue-cli

   vue init webpack an

   手动

   npm init

```
#### 2. Webpack

```
  an/package.json

  import Vue from 'vue'

```


#### 3. 进入Vue项目

* 首先看src中的main.js

* main.js中引入的App.vue

* 其次是组件的components文件夹

* assets里面放一些你需要引入的内容和图片


#### 4. 几大模块

1. vue.js

```
  src/main.js

  import Vue from 'vue'
```

2. 路由模块

```
  src/main.js

  import router from './router'
```


```
  src/roter/index.js

  import Home from '@/pages/Home'

  {
    path: '/',
    name: 'Home',
    component: Home
  },
```

#### 5. Vue文档


#### 6. 项目开始

1. 引入组件以及向组件中传值以及ajax请求

```
  <template>
  <div class="home">
      <list-article :initItems="articles"></list-article>
  </div>
  </template>

  <script>
  import listArticle from '@/components/List-article';
  export default {
  name: 'home',
  data() {
    return {
      articles: [{
        title: '加载失败'
      }]
    }
  },
  components: {
    listArticle
  },
  created() {
    this.getArticles()
  },
  watch: {},
  methods: {
    getArticles() {
      var that = this
      var xhr = new XMLHttpRequest()
      xhr.open('GET', '/articles', false)
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            var resData = JSON.parse(xhr.responseText)
            console.log(resData)
            that.articles = resData
            console.log(that.articles);
          } else {
            console.log('error')
          }
        }
      }
      xhr.send()
    }
  }
  }
</script>


```


```
  ajax地址修改地址
  an/config/index.js

  dev: {
   env: require('./dev.env'),
   port: 4000,
   autoOpenBrowser: true,
   assetsSubDirectory: 'static',
   assetsPublicPath: '/',
   proxyTable: {
     '/login': {
       target: 'http://www.xiaotiqinzhijia.com:4000/',
       changeOrigin: true,
       // pathRewrite: {
       //   '^/api': ''
       // }
     },
     '/articles': {
       target: 'http://www.xiaotiqinzhijia.com:4000/',
       changeOrigin: true,
       // pathRewrite: {
       //   '^/api': ''
       // }
     }
   },

```

2.接入值

```
  <template>
  <div class="">
    <ul class="list-article">
      <li class="item-article" v-for="item in items">
        <router-link :to="{ name: 'article', params: { id: item.id }}">
          <h4 class="title">{{item.title}}</h4>
          <p class="des">{{item.description}}</p>
          <div class="cover">
            <img :src="item.cover" alt="">
          </div>
          <div class="meta">
            <div class="float-left avatar">
              <img :src="item.avatar" alt="">
            </div>
            <p class="overflow">
              <span class="float-right date">{{item.date}}</span>
              <span class="overflow author-name">{{item.author}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  </template>

  <script>
  export default {
  name: 'list-article',
  data() {
    return {
      items: this.initItems
    }
  },
  props: {
    initItems: {
      type: Array,
      default: function() {
      }
    }
  }
  }
  </script>
```
