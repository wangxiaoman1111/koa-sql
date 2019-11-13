let Router=require("koa-router")
let router=new Router()
let query=require("../db/query")


router.get("/list",async (ctx)=>{
    try{
     let data=await query("select * from yuekao")
            ctx.body={ 
                code:1,
                data:data
            } 
    }catch(e){
        ctx.body={
            code:0,
            msg:e.error
        }
    }  
})

router.get("/add",async (ctx)=>{
    let {title,time,author}=ctx.query
    try{
     await query("INSERT INTO yuekao (title,time,author) VALUES(?,?,?)", [title,time,author])
            ctx.body={ 
                code:1,
                msg:"添加成功"
            } 
    }catch(e){
        ctx.body={
            code:0,
            msg:e.error
        }
    }  
})

router.get("/del",async (ctx)=>{
    let {id}=ctx.query
    try{
     await query("delete from yuekao where id=?",[id])
            ctx.body={ 
                code:1,
                msg:"删除成功"
            } 
    }catch(e){
        ctx.body={
            code:0,
            msg:e.error
        }
    }  
})

router.get("/update",async (ctx)=>{
    let {author,title,id}=ctx.query
    try{
     await query("update yuekao set author=?,title=? where id=?",[author,title,id])
            ctx.body={ 
                code:1,
                msg:"修改成功"
            } 
    }catch(e){
        ctx.body={
            code:0,
            msg:e.error
        }
    }  
})

router.get("/dim",async (ctx)=>{
   let {title}=ctx.query;
    try{
   let data= await query(`select * from yuekao where title like '%${title}%'`)
            ctx.body={ 
                code:1,
                data:data
            } 
    }catch(e){
        ctx.body={
            code:0,
            msg:e.error
        }
    }  
})

module.exports=router