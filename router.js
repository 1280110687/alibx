const express = require('express')
const pagesController = require('./controllers/pagesController.js')
const usersController = require('./controllers/usersController')
const postsController = require('./controllers/postsController')
const cateContoller = require('./controllers/cateController')
const uploadController = require('./controllers/uploadController')

// 创建路由模块对象
const router = express.Router()
// 添加路由配置
// 添加一个路由配置
// 读取前台首页
// 回调函数:当响应一个路由请求的时候,会自动的调用传入的回调函数,并为回调函数传入两个参数
router.get('/', pagesController.getIndexPage)
  .get('/detail', pagesController.getDetailPage)
  .get('/list', pagesController.getListPage)

  .get('/login', pagesController.getLoginPage)
  // 读取后台首页：约定后台页都以/admin开头
  .get('/admin', pagesController.getAdminIndexPage)
  .get('/admin/categories', pagesController.getAdminCategoriesPage)
  .get('/admin/comments', pagesController.getAdminCommentsPage)
  .get('/admin/nav-menus', pagesController.getAdminNav_menusPage)
  .get('/admin/password-reset', pagesController.getAdminPassword_reset)
  .get('/admin/post-add', pagesController.getAdminPost_add)
  .get('/admin/posts', pagesController.getAdminPosts)
  .get('/admin/profile', pagesController.getAdminProfile)
  .get('/admin/settings', pagesController.getAdminSettings)
  .get('/admin/slides', pagesController.getAdminSlides)
  .get('/admin/users',pagesController.getAdminUsers)
  //下面的路由是业务处理
  .post('/login', usersController.login)
  .get('/loginOut', usersController.loginOut)


  .get('/getPostList', postsController.getPostList)
  .get('/getCateList', cateContoller.getCateList)
  //文件上传
  .get('/uploadFile',uploadController.uploadFile)

// 暴露
module.exports = router