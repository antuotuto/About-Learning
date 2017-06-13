<template>
  <div class="listStay">
    <p>gogogogogo</p>

    <button type="button" name="button" @click="$emit('login')">出来吧</button>

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
    height:200px;
    width:100%;
    background: green;
  }

</style>
