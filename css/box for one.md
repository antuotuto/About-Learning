# 漂亮的盒子收缩css3动画

` 王安安 `

> 这个世界上本就没有必须存在的事实 去发现真正属于你的事实 不是其他人对你人生的思考 用自己的理解去编织属于你自己的全新世界 赠予那些此时此刻稳步前进的筑梦者

#### 1. 让五个盒子从分开运动到一起的css3动画

```
  /*html*/
  <div class="box">
    <div class="box-every">
    <div class="box-every">
    <div class="box-every">
    <div class="box-every">
    <div class="box-every">
  </div>

  /*css*/
  .box .box-every{
    height:225px;
    width:370px;
    background: rgba(255,255,255,0.8);
    border-radius: 10px;
    box-sizing: border-box;
    padding-top:46px;
    text-align: center;
    float: left;
    margin-bottom: 8px;
    margin-right: 8px;
    transition: 0.6s;
  }
  .box-every:nth-child(1){
      animation: every-frist 0.6s  linear;
  }
  .box-every:nth-child(2){
      animation: every-second 0.6s  linear;
  }
  .box-every:nth-child(3){
      animation: every-third 0.6s  linear;
  }
  .box-every:nth-child(4){
      animation: every-four 0.6s  linear;
  }
  .box-every:nth-child(5){
      animation: every-five 0.6s  linear;
  }
  @keyframes every-frist
  {
      from{
          transform: translate(-200px,-200px);
          opacity: 0;
      }
      to{
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes every-second
  {
      from{
          transform: translate(200px,-200px);
          opacity: 0;
      }
      to{
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes every-third
  {
      from{
          transform: translate(-200px,200px);
          opacity: 0;
      }
      to{
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes every-four
  {
      from{
          transform: translate(0,300px);
          opacity: 0;
      }
      to{
          transform: translate(0,0);
          opacity: 1;
      }
  }
  @keyframes every-five
  {
      from{
          transform: translate(200px,200px);
          opacity: 0;
      }
      to{
          transform: translate(0,0);
          opacity: 1;
      }
  }
```



#### End

`希望能帮到热爱科技的你`
