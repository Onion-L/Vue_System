var express = require('express');
var app = express();
var mysql = require('mysql');

//端口号
var port = 3000;

// 创建与数据库的连接
const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'root',
    database: "vue_system"    //数据库名称
});

//开始连接
db.connect((err) => {
    if (err) throw err;
    console.log("连接成功");
})

//创建接口
app.get("/user", (req, res) => {
    let sql = "select * from user";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            //将数据转换为json格式
            var dataString = JSON.stringify(result);
            var data = JSON.parse(dataString);
            res.json({
                status: '0',
                msg: data
            })
        }
    })
})

app.listen(port, () => {
    console.log("服务器开启", port, "端口...")
});
