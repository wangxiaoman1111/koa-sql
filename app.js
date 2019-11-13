let koa=require("koa")
let app=new koa()
let router=require("./router")
let bodyparser=require("koa-bodyparser")
app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())
app.listen(7002,()=>{
    console.log("成功...")
})


