// 此文件是调用我们自定义的中间件的文件

//1. 导入：
const express = require('express');


// 引入自己定义的中间件：
const dirmiddleware = require('./middlewares/dirware');

// 2.创建实例对象
const app = express();

// 3.使用我们自己定义的中间件：
app.use(dirmiddleware);

// 4.绑定监听请求/路由
app.get('/get',(req,res)=>{

    console.log(req);
})

// 5.启动服务
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})


