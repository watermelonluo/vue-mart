import axios from 'axios'

export default {
    getGoods(){
        return axios.get('/api/goods').then(res=>{
            console.log(res);
            
            const {code} = res.data
            if(code){
                return {slider:res.data.data.slider,goodsList:res.data.data.goodsList}
            }else{
                return null
            }
        })
    }
}