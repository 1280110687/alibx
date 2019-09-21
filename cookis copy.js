// 引入experss
const express = require('express');
const querystring = require('querystring');
// 创建应用
const app = express();
// 添加端口监听
app.listen(7878, () => {
  console.log('http://127.0.0.1:7878');
});

app.get('/', (req, res) => {
  console.log(req.headers.cookie);
  var obj = querystring.parse(req.headers.cookie)
  console.log(obj);

  if (obj.isLogin && obj.isLogin == 'true') {
    res.end('测试的时候记得删除浏览器本地存储的cookie数据')
  } else {
    res.writeHead(200, {
      'Set-Cookie': 'isLogin=true'
    })
    res.end('第一次测试，请求中无cookie，响应中有')
  }

})
// 测试的时候记得删除浏览器本地存储的cookie数据