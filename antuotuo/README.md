# antuotuo

> A Vue.js project

## 查看和安装项目

``` bash
# git clone
需要有node.js

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 打包项目
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 1. 项目的开始 - 开发人员按这个步骤开始使用

###### 如果没有安装vue-cli
  npm install-g vue-cli

###### cd到单独的文件夹
  vue init webpack anan

##### 安装安装 [Element][1]
  npm i element-ui -S

  ```
    # main.js 中需要修改的部分

    import Vue from 'vue'
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'
    import App from './App.vue'
    import router from './router'

    Vue.use(ElementUI)

    Vue.config.productionTip = false

    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  ```
##### 安装 scss
  - npm install node-sass --save-dev
  - npm install sass-loader --save-dev

  ```
  <style lang="scss" scoped>

  </style>

  ```
#### 项目可以开始使用了

### 2. 项目开发第一步



[1]:http://element.eleme.io/#/zh-CN
