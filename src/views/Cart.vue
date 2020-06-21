<template>
  <div class="cart">
    <ul>
      <li v-for="(item, index) in cartList" :key="item.id">
        <div class="left">
          <p>{{item.name}}</p>
          <span>{{item.price}}</span>
        </div>
        
        <div class="right">
          <i class="cubeic-remove" @click="removeCart(index)">-</i>
          <span>{{item.cartCount || 0}}</span>
          <i class="cubeic-add" @click="addCart(index)">+</i>
        </div>
      </li>
    </ul>
    <div class="total-price">
      <div style="margin-right: 30px;">件数 {{cartTotal}}</div>  总价: {{total}}
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapGetters} from 'vuex'
import TabBar from '@/components/TabBar.vue'
export default {
  name: 'cart',
  components:{TabBar},
  computed: {
    ...mapState({
      cartList:state=>state.cart.cartList
    }),
    ...mapGetters({
      total: 'total',
      cartTotal: 'cartTotal'
    })
  },
  mounted() {
    console.log(this.cartList);
    
  },
  methods: {
    addCart(index){
      this.$store.commit('cartadd',index)
    },
    removeCart(index){
      this.$store.commit('cartremove',index)
    }
  }
  
}
</script>
<style lang="less">
.cart{
  li{
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
    margin-bottom: 5px;
    padding: 10px;
    .left{
      text-align: left;
      p{
        font-size: 16px;
        color: #333;
        margin-bottom: 8px;
      }
      span{
        color: red;
        
      }
    }
    .right{
      display: flex;
      align-items: center;
      i{
        font-size: 20px;
        color: red;
      }
      span{
        margin: 0 10px;
        font-size: 18px;
      }
    }
  }
  .total-price{
    background-color: #ffffff;
    padding: 20px 0;
    font-size: 20px;
    color: red;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
