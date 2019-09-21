// 这个文件的作用是处理所有的页面请求
module.exports = {
  // 返回前台页面
  // 1.返回前台首页
  getIndexPage(req,res){
      res.render('index.ejs')
  },
  // 2.返回详情页
  getDetailPage(req,res){
      res.render('detail.ejs')
  },
  // 3.返回列表页
  getListPage(req,res){
      res.render('list.ejs')
  },

  // 获取登陆页面
  getLoginPage(req,res){
      res.render('admin/login.ejs')
  },

  // 返回后台页面,做为约定,在后台页面请求之前添加前缀:/admin
  // 1.返回后台首页
  getAdminIndexPage(req,res){
    // if (req.session.isLogin && req.session.isLogin == 'true') {
      res.render('admin/index.ejs')
    // } else {
    //   res.redirect('/login')
    //   }
  },
  // 2.返回分类页面
  getAdminCategoriesPage(req,res){
      res.render('admin/categories.ejs')
  },
  getAdminCommentsPage(req, res) {
    res.render('admin/comments.ejs')
  },
  getAdminNav_menusPage(req, res) {
    res.render('admin/nav-menus.ejs')
  },
  getAdminPassword_reset(req, res) {
    res.render('admin/password-reset.ejs')
  },
  getAdminPost_add(req, res) {
    res.render('admin/post-add.ejs')
  },
  getAdminPosts(req, res) {
    res.render('admin/posts.ejs')
  },
  getAdminProfile(req, res) {
    res.render('admin/profile.ejs')
  },
  getAdminSettings(req, res) {
    res.render('admin/settings.ejs')
  },
  getAdminSlides(req, res) {
    res.render('admin/slides.ejs')
  },
  getAdminUsers(req, res) {
    res.render('admin/users.ejs')
  }
}