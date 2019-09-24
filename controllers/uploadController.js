// 这个文件主要用于处理文件上传
const formidable = require('formidable')
module.exports = {
  uploadFile(req, res) {
    // 使用formidable模板实现文件上传
    let form = new formidable.IncomingForm()
    // 配置
    form.encoding = 'utf-8'
    form.keepExtensions = true  // 设置上传文件保持原来的文件扩展名  true 为保存；false 为不保存
    form.uploadDir = './uploads' // 上传文件的存储目录
    // 实现文件上传操作
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.json({
          code: 400,
          msg:'文件上传失败'
        })
      } else {
        console.log(fields)
        console.log(files)
        res.json({
          code: 200,
          msg: '文件上传成功',
          
        })
      }
    })
  }
}