<template>
<div id="app">
  <button type="button" name="button" class="btn" @click="toggleView">
        <span class="glyphicon " :class="{'glyphicon-th':currentView == 'view-main','glyphicon-remove':currentView != 'view-main'}"></span>
    </button>
  <div class="header-top"></div>
  <div class="view-left" :class="viewLeft">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
  <div class="view-down" :class="{ active: currentView == 'view-down' }">
    <!-- <component v-bind:is="viewDownComponent"></component> -->
  </div>
  <div class="view-up" :class="{ active: currentView == 'view-up' }">
    <!-- <component v-bind:is="viewUpComponent" @login="switchView" @linkTo="linker"  ></component> -->
    <div class="listStay ">
      <div class="listStayOn " :class="listStayActive">
        <div class="img-box">
          <img src="../static/admin.png" alt="">
        </div>
        <ul>
          <li v-for="(nav,index) in listStays" :key="nav.title" @click="linker">
            <router-link :to="nav.router">
              <span class="glyphicon" :class="nav.icon"></span>
              <p>{{ nav.title }}</p>
            </router-link>
          </li>
        </ul>
        <!-- <button type="button" name="button" @click="$emit('login')">出来吧</button> -->
      </div>
    </div>
  </div>
  <div class="blank" :class="showBlank" @click="closeBlank"></div>
</div>
</template>

<script>
import listStay from '@/components/ListStay'
import hello from '@/components/Hello'
import {
  listStays
} from '@/data'


export default {
  name: 'app',
  data() {
    return {
      currentView: 'view-main',
      viewUpComponent: 'listStay',
      viewDownComponent: 'hello',
      showBlank: '',
      viewLeft: '',
      listStays: listStays,
      listStayActive: 'active'
    }
  },
  methods: {
    toggleView: function() {
      if (this.currentView == 'view-main') {
        this.currentView = 'view-up';
        this.showBlank = 'active';
        this.viewLeft = 'active';
        this.listStayActive = '';
      } else {
        this.currentView = 'view-main';
        this.showBlank = '';
        this.viewLeft = '';
        this.listStayActive = 'active';
      }
    },
    switchView: function() {
      this.currentView = 'view-down';
    },
    closeBlank: function() {
      this.showBlank = '';
      this.currentView = 'view-main';
      this.viewLeft = '';
      this.listStayActive = 'active';
    },
    linker: function() {
      this.currentView = 'view-main';
      this.showBlank = '';
      this.viewLeft = '';
      this.listStayActive = 'active';
    }
  },
  components: {
    listStay,
    hello
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgba(0,0,0,.8);
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity 0.3s;
    }
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
    .listStay {
        height: 100%;
        width: 100%;
        position: relative;
        .listStayOn {
            height: 100%;
            width: 100%;
            background: #004332;
            color: #fff;
            padding-top: 50px;
            transition: 0.4s;
            ul {
                padding: 50px 0 0;
                li {
                    background: #004332;
                    height: 50px;
                    display: block;
                    line-height: 50px;
                    font-size: 16px;
                    animation: listTwo 0.3s;
                    color: #fff;
                    user-select: none;
                    border-left: 0;
                    transition: 0.6s;
                    a {
                        color: #fff;
                        text-decoration: none;
                        height: 100%;
                        width: 100%;
                        display: inline-block;
                        position: relative;
                        span {
                            height: 50px;
                            width: 50px;
                            line-height: 50px;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }
                    &:hover {
                        background: #24c17e;
                    }
                }
            }
            &.active {
                width: 50px;
                height: 100%;
                background: #004332;
                color: #fff;
                position: absolute;
                right: 0;
                padding: 0;
                .img-box {
                    height: 50px;
                    width: 50px;
                    box-sizing: border-box;
                    padding-top: 10px;
                    img {
                        height: 33px;
                        width: 40px;
                    }
                }
                ul {
                    padding: 0;
                    li {
                        background: #004332;
                        height: 50px;
                        display: block;
                        line-height: 50px;
                        font-size: 16px;
                        animation: listTwo 0.3s;
                        color: #fff;
                        user-select: none;
                        border-left: 0;
                        transition: 0.6s;
                        a {
                            color: #fff;
                            text-decoration: none;
                            height: 100%;
                            width: 100%;
                            display: inline-block;
                            transition: 0.6s;
                            span {
                                height: 50px;
                                width: 50px;
                            }
                            p {
                                display: none;
                            }
                            &:hover {
                                background: #159a61;
                                width: 200px;
                                p {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .btn {
        position: fixed;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        line-height: 40px;
        padding: 0;
        border: 0;
        background: rgba(0, 0, 0, 0.7);
        // border-radius: 3px;
        outline: none;
        font-weight: bold;
        font-size: 17px;
        z-index: 1000;
        color: #fff;
        span {
            line-height: 39px;
        }
    }

    .header-top {
        height: 50px;
        width: 100%;
        background: #004332;
        position: absolute;
        top: 0;
        left: 0;
    }

    .blank {
        display: none;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .5);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 500;
        &.active {
            display: block;
        }
    }
    .view-down {
        height: 100vh;
        width: 250px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.4s;
        transform: translate3d(-200px, 0, 0);
        z-index: 600;
        &.active {
            transform: translate3d(0, 0, 0);
        }
    }
    .view-left {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        transition: 0.4s;
        padding-left: 50px;
        position: relative;
        padding-top: 50px;
        overflow: scroll;
        &.active {
            padding-left: 250px;
        }
    }
    .view-up {
        height: 100%;
        width: 250px;
        background: #004332;
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.4s;
        // overflow: hidden;
        transform: translate3d(-200px, 0, 0);
        z-index: 600;
        &.active {
            transform: translate3d(0, 0, 0);
        }
    }
}
</style>
