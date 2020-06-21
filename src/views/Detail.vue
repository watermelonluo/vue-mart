<template>
  <div class="detail">
      <h1>产品详情</h1>
      <p>{{$route.params.id}}</p>
      <img :src="detail.image" alt="" srcset="">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  computed: {
      detail(){
          const id=this.$route.params.id;
          const item=this.$store.state.goods.slider.find(v => v.id==id);
          console.log(id,item,this.$store.state.goods.slider);
          
            return item
           
      }
  }
}
</script>
<style lang="less">
.detail{
    background-color: #ffffff;
    h1{
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 20px;
    }
    p{
        font-size: 16px;
    }
    img{
        width: 100%;
    }
}

</style>

