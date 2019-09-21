// 引入experss
const express = require('express');
const fs = require('fs');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置ejs为默认模板引擎
app.set('view engine', 'ejs');
// 配置ejs资源的默认目录，后期渲染时只需要指定相对路径
app.set('views', 'views');

// 添加session中间件
app.use(session({
  secret: 'superman',
  resave: false,
  saveUninitialized: false
}))
// 每个请求都会经过的中间件
// next：本意是执行事件队列中的下一个操作，所谓的下一个操作就是当前操作
app.use(function (req, res, next) {
  // console.log(7899999)
  // console.log(req.session.isLogin)
  if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/login' || req.url.indexOf('/admin') == -1) {
    next()
  } else {
    // 重定向
    res.redirect('/login')
  }
})


// 使用路由
app.use(router);