import us from '../service/user'

export default {
    state: {
        isLogin: localStorage.getItem('token') ? true : false,
        username:''
    },
    mutations: {
        setLoginState(state, b) {
            state.isLogin = b
        },
        setUserName(state,username){
            state.username = username
        }
    },
    actions: {
        login({commit}, user) {
            return us.login(user)
            .then(res=>{
                console.log(res);
                const { code, token, username } = res.data
                if (code) {
                    commit('setLoginState', true);
                    commit('setUserName', username);
                    localStorage.setItem('token', token)
                }
                return code
            })
        },
        logout({commit}){
            commit('setLoginState', false);
            localStorage.removeItem('token')
        }
    }

}