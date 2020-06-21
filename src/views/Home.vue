<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in slider" :key="item.id">
        <router-link :to="'/detail/'+item.id">
         <img :src="item.image">
       </router-link> 
      </van-swipe-item>
    </van-swipe>
    <goods-list :list="goodsList" @cartanim="startCartAnim"></goods-list>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import GoodsList from '@/components/GoodsList.vue'
import CartAnim from '@/components/CartAnim.vue'
import TabBar from '@/components/TabBar.vue'
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  name: 'home',
  components:{
    GoodsList,TabBar
  },
  computed: {
    ...mapState({slider:state=>state.goods.slider}),
    ...mapState({goodsList:state=>state.goods.goodsList})
  },
  created() {
    this.getGoodsInfo()
  },
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.slider) 
  },
  methods: {
    ...mapActions(['getGoodsInfo']),
    startCartAnim(el){
      const anim = this.$create(CartAnim);
      anim.start(el);
      anim.$on('transitionend',anim.remove)
    },
    clickHandler(item, index){

    }
  },
}
</script>

<style lang="less">
  .cube-slide{
    margin-bottom: 10px;
  }
</style>

