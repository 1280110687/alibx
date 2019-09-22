// 这个文件主要用于处理所有与categories表相关的业务
const cateModel = require('../models/cateModel');
module.exports = {
  getCateList(req, res) {
    cateModel.getCateList((err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg:'获取数据失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '获取数据成功',
          data
        })
      }
    })
  }
}