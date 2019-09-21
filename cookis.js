// 引入experss
const express = require('express');
// const querystring = require('querystring');
// 创建应用
const app = express();
// 添加端口监听
app.listen(7878, () => {
  console.log('http://127.0.0.1:7878');
});

app.get('/', (req, res) => {
  res.writeHead(200, {
   'Set-Cookie':'isLogin=true'
  })
  res.end('hello')
})