<template>
  <div id="app">

    <button type="button" name="button" class="btn" @click="toggleView">
        <span class="glyphicon " :class="{'glyphicon-th':currentView == 'view-main','glyphicon-remove':currentView != 'view-main'}"></span>
    </button>
    <router-view></router-view>

    <div class="view-down" :class="{ active: currentView == 'view-down' }">
      <component v-bind:is="viewDownComponent"></component>
    </div>

    <div class="view-up" :class="{ active: currentView == 'view-up' }">
      <component v-bind:is="viewUpComponent" @login="switchView"></component>
    </div>

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
      }
  },
  methods: {
    toggleView: function (){
      if(this.viewUpComponent == ''){
        this.currentView = 'view-down'
        this.viewUpComponent = 'listStay';
        this.currentView = '';
      }else{
        this.viewUpComponent = '';
        this.viewDownComponent = '';
        this.currentView = 'view-main';
      }
    },
    switchView: function (){
      this.currentView = 'view-up';
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
}
</style>
