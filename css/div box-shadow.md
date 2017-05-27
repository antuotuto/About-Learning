# 用div模拟盒子阴影

` 王安安 `

> 这个世界上本就没有必须存在的事实 去发现真正属于你的事实 不是其他人对你人生的思考 用自己的理解去编织属于你自己的全新世界 赠予那些此时此刻稳步前进的筑梦者

#### 1. 用div模拟盒子阴影

```
  /*html*/
  <div class="right"></div>
  <div class="box-s">
      <div class="right-on"></div>
  </div>

  /*css*/
  .right {
    width: 545px;
    height: 365px;
    background: #fff;
    float: left;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box;
    position: relative;
    z-index: 5000;
  }

  .box-s {
      position: absolute;
      left: 294px;
      top: 0px;
      height: 100vh;
      width: 100vw;
      /*background: #fff;*/
      overflow: hidden;
  }
  .right-on {
      position: absolute;
      left: 0;
      top: 250px;
      height: 645px;
      width: 1200px;
      transform: rotate(50deg);
      background: linear-gradient(30deg, rgba(0, 0, 0, 0.2), rgba(181, 181, 181, 0.1));
      z-index: 100;
  }


```
#### 2. 效果
  ![](http://ooi407n8x.bkt.clouddn.com/antuotuo/css/boxshaw.png)

#### End

`希望能帮到热爱科技的你`
