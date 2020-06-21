
export default {
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        cartList: []
    },
    mutations: {
        addcart(state, item) {
            const goods=state.cartList.find(v=>v.name==item.name);
            console.log(goods)
            
            if(goods){
                goods.cartCount +=1
            }else{
                state.cartList.push({
                    ...item,
                    cartCount: 1
                })
            }
            console.log(goods,item);
        },
        cartremove(state,index){
            if(state.cartList[index].cartCount>1){
                state.cartList[index].cartCount -= 1
            }           
        },
        cartadd(state,index){
            state.cartList[index].cartCount += 1
        }
    },
    getters:{
        cartTotal: state=>{
            let num=0;
            state.cartList.forEach(v => {
                num += v.cartCount
            });
            return num
        },
        total: state=>{
            return state.cartList.reduce(
                (total,item)=>total+item.cartCount*item.price,
                0
            )
        }
    }    
}