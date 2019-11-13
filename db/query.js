const connect=require("./index")
module.exports=(sql,params=[])=>{
    return new Promise((resolve,reject)=>{
        connect.query(sql,params,(error,data)=>{
            if(error){
                reject({mag:"error",error})
            }else{
                resolve(data)
            }
        })
    })
}