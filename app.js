// 引入experss
const express = require('express');
const fs = require('fs');
const router = require('./router');
const bodyParser = require('body-parser');
// 创建应用
const app = express();
// 添加端口监听
app.listen(5656, () => {
  console.log('http://127.0.0.1:5656');
});
// 托管静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

// 配置body-parter 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 配置ejs为默认模板引擎
app.set('view engine', 'ejs');
// 配置ejs资源的默认目录，后期渲染时只需要指定相对路径
app.set('views', 'views');

// 使用路由
app.use(router);