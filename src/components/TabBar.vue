<template>
    <div>      
        <van-tabbar route>
            <van-tabbar-item replace to="/" icon="home-o">
                Home
            </van-tabbar-item>
            <van-tabbar-item :badge="cartTotal || ''" replace to="/cart" icon="search">
                Cart
            </van-tabbar-item>
            <van-tabbar-item replace to="/me" icon="search">
                Me
            </van-tabbar-item>
        </van-tabbar>
    </div>
    
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  data () {
    return {
      selectedLabelDefault: 'Home',
      
    }
  },
  computed: {
    ...mapGetters({
      cartTotal: 'cartTotal'
    })
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      //console.log(label)
    //   if(this.selectedLabelDefault==label){
    //     return
    //   }
    //   if(label==='Home') {
    //     this.$router.push('/')
    //     this.selectedLabelDefault='Home'
    //   }else if(label==='Cart'){
    //     this.$router.push('/cart')
    //     this.selectedLabelDefault='Cart'
    //   } else {
    //     this.$router.push('/me')
    //     this.selectedLabelDefault='Me'
    //   }
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
        console.log(label)
      
        if(label==='Home') {
            this.$router.push('/')
            //this.selectedLabelDefault='Home'
        }else if(label==='Cart'){
            this.$router.push('/cart')
            //this.selectedLabelDefault='Cart'
        } else {
            this.$router.push('/me')
            //this.selectedLabelDefault='Me'
        }
    }
  }  
}
</script>

<style lang="less" scoped>


    .cube-tab-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #ffffff;   
  }
  .num{
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: #ffffff;
    background-color: red;
    bottom: 25px;
    line-height: 18px;
    text-align: center;
    right: 42%;
    font-size: 12px;
  }
</style>
