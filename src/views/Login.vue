<template>
    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {  
        username: '',
        password: ''            
    }
  },
  methods: {
    onSubmit(values) {
      //e.preventDefault()
      console.log(values);
      
      this.$store.dispatch('login',values)
      .then(code=>{
          if(code){
            
            const path=this.$route.query.redirect || '/';
            console.log(this,path)
            this.$router.push(path)
          } 
      }).catch(err=>{
        const toast = this.$createToast({
            time: 2000,
            txt: err.message || err.response.data.message || '登录失败'
          })
        toast.show()
      })
      
    }    
  }
}
</script>
<style lang="less" scoped>
  .login{
    padding-top: 30%;
  }
</style>
