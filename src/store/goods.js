import gs from '../service/goods'

export default {
    state: {
        slider: [],
        goodsList: []
    },
    mutations: {
        setGoodsInfo(state, {slider,goodsList}) {
            state.slider = slider;
            state.goodsList = goodsList;
        }
    },
    getters: {
        // goodsList: state=> {
        //     return state.keys.map(key=>state.goodsInfo[key])
        //     .reduce((prev,next)=>prev.concat(next),[])
        // }
    },
    actions: {
        async getGoodsInfo({state, commit}) {
            if(!state.goodsList.length) {
               gs.getGoods().then(res=>{
                console.log(res);
                
                commit('setGoodsInfo', res);
                localStorage.setItem('cart',JSON.stringify(res.goodsList))
               })              
            }
            
        }
    }

}