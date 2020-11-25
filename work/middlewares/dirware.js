// 导入
const fs = require("fs");


//定义中间件
const dirmiddleware = (req, res, next) => {
    let time = new Date();
    //年
    let year = time.getFullYear();
    // 月
    let month = time.getMonth() + 1;
    //天
    let day = time.getDate();
    // 小时
    let hours = time.getHours();
    //分钟
    let mins = time.getMinutes();
    //秒
    let s = time.getSeconds

    //访问地址
    let add = req.url;
    //ip
    let ip = req.ip;

    //方法
    let method = req.method;

    //浏览器版本信息

    let b_version = req.headers['user-agent'];

    fs.appendFile(
        `./logs/${year}-${month}-${day}.log`, 
    `访问时间:${year}-${month}-${day} ${hours}:${mins}:${s}\n
    访问地址:${add}<br>
    ip:${ip}<br>
    访问方法：${method}
    浏览器：${b_version}

    `, () => {
        res.send('上传成功');
    })
}

module.exports = dirmiddleware;