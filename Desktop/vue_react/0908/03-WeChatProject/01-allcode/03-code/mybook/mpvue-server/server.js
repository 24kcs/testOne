// 服务端的代码
// 使用koa koa-router flyio nodemon
// 引入koa
let Koa = require('koa')
// 引入koa-router
let KoaRouter = require('koa-router')
// 引入datas数据
let datas = require('./datas/data.json')
// 实例化Koa
let koa = new Koa()
// 实例化KoaRouter
let koaRouter = new KoaRouter()
// 调用方法写写接口
koaRouter.get('/', (ctx, next) => {
  // ctx可以获取调用接口的时候传入的参数,还可以通过ctx.body向前台界面响应数据
  // next --->放行
  const req = ctx.query.req
  console.log(req)
  ctx.body = '哈哈,您好啊'
})

// 登录的接口
koaRouter.get('/login', (ctx) => {
  const result = ctx.query.pwd
  console.log(result)
  ctx.body = { name: '小明', age: 18 }
})

// 获取商品的接口
koaRouter.get('/shops', (ctx) => {
  const sname = ctx.query.sname
  console.log(sname)
  ctx.body = [
    {
      name: '大白菜',
      price: '45元'
    },
    {
      name: '肉肉',
      price: '40元'
    }
  ]
})
// 搜索接口
koaRouter.get('/search', (ctx) => {
  // 获取调用接口的时候传入的参数
  const req = ctx.query.req
  console.log(req)
  // 响应回去的数据
  ctx.body = datas
})

// koaRouter中的路由的相关的方法

koa
  .use(koaRouter.allowedMethods()) // 路由中所有的相关的方法
  .use(koaRouter.routes()) // 所有的路由
// 监视对应的端口
koa.listen('4000', () => {
  console.log('服务器启动了')
  console.log('服务器的地址:http://localhost:4000')
})
