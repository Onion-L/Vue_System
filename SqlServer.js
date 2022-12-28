var express = require('express');
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

// 创建关闭数据库函数
function closeMysql(con) {
    con.end((err) => {
        if (err) return console.log(err);
        console.log("数据库关闭成功");
    })
}

//获取数据 
let sqlSelect = "select name from user where Id=1";
connect.query(sqlSelect, function (err, result) {
    if (err) return console.log(err);
    console.log("数据查找成功");
    console.log(result);
    closeMysql(connect);
});


//增加数据
let sqlAdd = "insert into user(name,address,date) values(?,?,?)";
let addDates = ["张三", "xxxxxxxxx", '2022-10-22'];
connect.query(sqlAdd, addDates, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("------数据增加成功--------");
        console.log(result);
        console.log("------end--------");
        closeMysql(connect);
    }
})



//删除数据
let sqlDel = "delete from user where userId=3";
connect.query(sqlDel, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log("------数据删除成功--------");
        console.log(res);
        console.log("------end--------");
        closeMysql(connect);
    }
})


//修改数据
let sqlUpdate = "update user set name=?,address=? where date=?";
let dateAlter = ["赵四", 'xxxxxx', '2022-12-05'];
connect.query(sqlUpdate, dateAlter, function (err, res) {
    if (err) return console.log(err);
    console.log("------数据修改成功--------");
    console.log(res);
    console.log("------end--------");
    closeMysql(connect);

})