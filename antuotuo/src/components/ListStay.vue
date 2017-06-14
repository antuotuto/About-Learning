<template>
  <div class="listStay">
    <div class="listStayOn">
      <img src="../../static/admin.png" alt="">
      <p>gogogogogo</p>

      <button type="button" name="button" @click="$emit('login')">出来吧</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'listStay',
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .listStay{
    height: 100%;
    width:100%;
    .listStayOn{
      height: 100%;
      width:100%;
      background: #004332;
      color:#fff;
    }
  }

</style>
