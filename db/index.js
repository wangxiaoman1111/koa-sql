const mysql=require("mysql")
const connection=mysql.createConnection({
    user:"root",
    password:"root",
    host:"127.0.0.1",
    port:"3306",
    database:"test"
})

connection.connect((error)=>{
    if(error){
        console.log("链接失败")
    }else{
        console.log("连接成功")
    }
})

module.exports=connection