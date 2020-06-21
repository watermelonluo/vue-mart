<template>
  <ul class="goodslist">
    <li v-for="(item,index) in list" :key="item.id">
        <div class="li-left">
            <img :src="item.src" alt="" srcset="">
            <div>
                <p>{{item.name}}</p>
                <span>￥ {{item.price}}</span>
            </div>
        </div>
        <div class="li-right">
            <van-icon class="cubeic-add" name="add" @click.stop.prevent="addCart($event,index)"/>
            <!-- <i class="cubeic-add" @click.stop.prevent="addCart($event,index)">+</i> -->
        </div>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'goodslist',
  props: ['list'],
  methods: {
   addCart(event,index){
       console.log(index);
       
       this.$store.commit('addcart',this.list[index]);
       this.$emit('cartanim',event.target);    
   }
  },
}
</script>

<style lang="less">
    .goodslist {
        li{
            display: flex;
            justify-content: space-between;
            background-color: #ffffff;
            margin-bottom: 5px;
            .li-left{    
                display: flex;           
                img{
                    width: 120px;
                    height: 80px;
                    margin-right: 10px;
                }
                div{
                    text-align: left;
                    p{
                        font-size: 14px;    
                        padding-top: 10px;
                        margin-bottom: 20px;                    
                    }
                    span{
                        color: red;
                        font-size: 12px;
                    }
                }
            }
            .cubeic-add{
                display: block;
                color: red;
                font-size: 20px;
                padding: 5px;
                margin: 5px;
            }
        }
    }
</style>
