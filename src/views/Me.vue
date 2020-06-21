<template>
  <div class="me">
      <i :class="this.$store.state.user.username?'cubeic-smile':'cubeic-info'"></i>
      <h4>{{user}}</h4>
      <tab-bar></tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue'
export default {
  name: 'home',
  components:{TabBar},
  computed: {
      user(){
          return this.$store.state.user.username || '未登录'
      }
  }
}
</script>
<style lang="less">
.me{
    
    .cubeic-smile,.cubeic-info{
        display: block;
        font-size: 50px;
        color: chocolate;
        padding-bottom: 10px;
        margin-top: 100px;
    }
    h4{
        font-size: 18px;
        color: red;
    }
}

</style>

