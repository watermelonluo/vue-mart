import axios from 'axios'

export default function (vm) {
    axios.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token')
            if(token) {
                //config.headers.common['Authorization'] = 'Bear ' + token
                config.headers.token = token
            }
            return config
        }
    )

    axios.interceptors.response.use(null,
        err => {          
            if(err.response.status === 401) {
                vm.$store.dispatch('logout')
                vm.$router.push('login')
            }
            return Promise.reject(err)
        }
    )
}