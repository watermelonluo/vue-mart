const Koa = require('koa')
const jwt = require('jsonwebtoken')
const Router = require('koa-router')
const jwtAuth = require('koa-jwt')

const app = new Koa()
const router = new Router()
const secret = 'it is a secret'

router.get('/api/login', async ctx => {
    const { username, password } = ctx.query
    console.log(ctx.query,'get',username, password)
    if(username === 'tim' && password === '123') {
        const token = jwt.sign({
            data: { username },
            exp: Math.floor(Date.now()/1000)+60*60
        },secret);
        ctx.body={code:1,token,username}
    }else{
        ctx.status=401;
        ctx.body={code:0,message:'用户名或密码错误'}
    }    
})

router.get('/api/goods', async ctx => {
    
        ctx.status=200;
        ctx.body={code:1,data:{
            slider: [
                {
                  id: '1234',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                },
                {
                    id: '2341',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                },
                {
                    id: '3214',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                }
              ],
              goodsList: [
                  {
                      id: 1,
                      src: 'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
                      price: 100,
                      name: '这是一件产品'
                  },
                  {
                      id: 2,
                      src:  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
                      price: 120,
                      name: '这是一件产品2'
                  },
                  {
                      id: 3,
                      src:  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
                      price: 150,
                      name: '这是一件产品3'
                  },
                  {
                      id: 4,
                      src:  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg',
                      price: 200,
                      name: '这是一件产品4'
                  }
              ]
        }}
       
})

app.use(router.routes())
app.listen(3000,()=>{
    console.log('start------111')
})
