<template>
  <div class="bsTaDept">
    <el-row>
      <el-col :span="6">
        <div class="people-now people-admin">
          <span class="glyphicon glyphicon-user"></span>
          <p>2000</p>

        </div>
      </el-col>
      <el-col :span="6">
        <div class="people-now">
          <span class="glyphicon glyphicon-jpy"></span>

        </div>
      </el-col>
      <el-col :span="6">
        <div class="people-now">
          <span class="glyphicon glyphicon-piggy-bank"></span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="people-now">
          <span class=""></span>
        </div>
      </el-col>
    </el-row>




  </div>
</template>

<script>
  export default {
    name:'bsTaDept',
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bsTaDept{
  height:100%;
  width:100%;
  background: #f5f5f5;
  padding: 15px;
  .people-now{
    height:110px;
    box-sizing: border-box;
    background: #004332;
    margin-left: 10px;
    border-radius: 3px;
    color:#fff;
  }
  .people-admin{
    margin-left: 0;
  }
}
</style>
