
const postsModel = require('../models/postsModels');
// 引入第三方模块处理时间格式   或者使用Mysql自带的时间格式  dateStrings:true
// var moment = require('moment');

module.exports = {
  getPostList(req, res) {
    // 接收用户参数
    let query = req.query;
    // 调用数据模块进行数据的获取
    postsModel.getPostList(query, (err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '数据查询失败'
        })
      } else {
        // 遍历data，将其中的每一个元素对象的created进行隔离的日期格式转换
        // moment().format('日期格式') // 将当前日期进行转换
        // moment(你想转换的源格式).format('目标格式')
        // data.forEach((value) => {
        //     value.created = moment(value.created).format('YYYY-MM-DD HH-mm-ss')
        // })
        // 酱紫太麻烦了
        res.json({
          code: 200,
          msg: '数据查询成功',
          data
        })
      }
    })
  }
}