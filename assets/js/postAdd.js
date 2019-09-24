$(function () {
  // 实现文件的上传
  $('#feature').on('change', function () {
    // 获取用户所选择的文件
    // files - 用户所选文件列表，它是一个伪数组
    let myfile = $('#feature')[0].files[0]
    console.log(myfile)

    var formData = new FormData()
    // blob : 二进制的大文件 -- 文件
    formData.append('img', myfile)
    // formData.append('myvalue','什么值都可以，只要是字符串')

    // 发起ajax请求
    // 支持的data的常见格式
    // key=value&key=value:$('form').serialize()
    $.ajax({
      type: 'post',
      url: '/uploadFile',
      data: formData,
      processData: false,
      contentType: false,
      success: function (res) {
        console.log(res)
        if (res.code == 200) {
          // 1.预览
          $('.thumbnail').attr('src', '/' + res.img).show()
          // 2.将当前图片路径存储到隐藏域，方便后期的参数获取
          $('[name="feature"]').val(res.img.substring(res.img.lastIndexOf('\\') + 1))
          
        }
      }
    })
  })

  // 初始化富文本框
  // 下面这句代码的作用是：创建一个富文本框控件(实例对象)来覆盖指定的id号为content的文本域
  CKEDITOR.replace('content')
  

































})