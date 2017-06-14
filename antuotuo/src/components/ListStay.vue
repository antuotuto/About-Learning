<template>
  <div class="listStay ">
    <div class="listStayOn active">
      <div class="img-box">
        <img src="../../static/admin.png" alt="">
      </div>
      <ul>
        <li v-for="(nav,index) in listStays" :key="nav.title" @click="$emit('linkTo')" >
          <router-link :to="nav.router">
            <span class="glyphicon"  :class="nav.icon"></span>
            <p>{{ nav.title }}</p>
          </router-link>
        </li>
      </ul>
      <!-- <button type="button" name="button" @click="$emit('login')">出来吧</button> -->
    </div>
  </div>
</template>

<script>
import {listStays} from '@/data'

  export default {
    name: 'listStay',
    data() {
      return {
        listStays:listStays,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created() {
      console.log(this.showBlank)
      console.log(this.items)
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .listStay{
    height: 100%;
    width:100%;
    position: relative;
    .listStayOn{
      height: 100%;
      width:100%;
      background: #004332;
      color:#fff;
      padding-top: 50px;
      ul{
        padding: 50px 0 0 0 ;
        li{
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
          a{
            color:#fff;
            text-decoration: none;
            height:100%;
            width: 100%;
            display: inline-block;
            position: relative;
            span{
              height:50px;
              width:50px;
              line-height: 50px;
              position: absolute;
              top:0;
              left:0;
            }
          }
          &:hover{
            background: #24c17e;
          }
        }
      }
      &.active{
        width:50px;
        height:100%;
        background: #004332;
        color:#fff;
        position: absolute;
        right:0;
        padding: 0;
        .img-box{
          height:50px;
          width:50px;
          box-sizing: border-box;
          padding-top: 10px;
          img{
            height:30px;
            width:40px;
          }
        }
        ul{
          padding: 0;
          li{
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
            a{
              color:#fff;
              text-decoration: none;
              height:100%;
              width: 100%;
              display: inline-block;
              transition: .6s;
              span{
                height:50px;
                width:50px;
              }
              p{
                display: none;
              }
              &:hover{
                background: #159a61;
                width:200px;
                p{
                  display: block;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
