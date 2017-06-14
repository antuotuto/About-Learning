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
      <component v-bind:is="viewUpComponent" @login="switchView" @linkTo="linker" :initItems="showBlank" ></component>
    </div>
    <div class="blank" :class="showBlank" @click="closeBlank"></div>
  </div>
</template>

<script>
import listStay from '@/components/ListStay'
import hello from '@/components/Hello'

export default {
  name: 'app',
  data() {
      return {
        currentView: 'view-main',
        viewUpComponent:'listStay',
        viewDownComponent:'hello',
        showBlank:'1',
        viewLeft:''
      }
  },
  methods: {
    toggleView: function (){
      if(this.currentView == 'view-main'){
        this.currentView = 'view-up';
        this.showBlank = 'active';
        this.viewLeft = 'active';
      }else{
        this.currentView = 'view-main';
        this.showBlank = '';
        this.viewLeft = '';
      }
    },
    switchView: function (){
      this.currentView = 'view-down';
    },
    closeBlank: function() {
      this.showBlank = '';
      this.currentView = 'view-main';
      this.viewLeft = '';
    },
    linker: function (){
      this.currentView = 'view-main';
      this.showBlank = '';
      this.viewLeft = '';
    }
  },
  components:{
    listStay ,
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
  height:100%;
  width:100%;
  overflow: hidden;
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity  .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
  .btn {
    position: fixed;
    top: 55px;
    right: 5px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    border: 0;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 3px;
    outline: none;
    font-weight: bold;
    font-size: 17px;
    z-index: 1000;
    color:#fff;
    span{
      line-height: 39px;
    }
  }

  .header-top{
    height: 50px;
    width: 100%;
    background: #004332;
    position: absolute;
    top:0;
    left:0;
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
      transition: .4s;
      transform: translate3d(-200px, 0, 0);
      z-index: 600;
      &.active {
        transform: translate3d(0, 0, 0);
      }
    }
    .view-left{
      width:100%;
      height:100%;
      box-sizing: border-box;
      transition: 0.4s;
      padding-left: 50px;
      position: relative;
      padding-top: 50px;
      overflow: scroll;
      &.active{
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
      transition: .4s;
      // overflow: hidden;
      transform: translate3d(-200px, 0, 0);
      z-index: 600;
      &.active {
        transform: translate3d(0, 0, 0);
      }
    }
}
</style>
