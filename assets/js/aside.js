$(function () {
  // 根据url获取当前路由
  let str = location.href;
  // 定义一个变量存储当前路由名称
  let routerName = '';
  // get请求url后面会带数据，但是我们不需要（即问好后面的我们不要）
  let index = str.indexOf('?');
  // 判断
  // 1.如果有参数
  if (index != -1) {  //index 不等于 -1 就证明 url 中找到了 "?"
    routerName = str.substring(str.lastIndexOf('/') + 1, index);
  }
  // 2.没有参数
  else {
    routerName = str.substring(str.lastIndexOf('/') + 1);
  }

  let menuPosts = $('#menu-posts');
  if (routerName == 'posts' || routerName == 'post-add' || routerName == 'categories') {
    menuPosts.addClass('in');
    menuPosts.attr('aria-expanded', true);
    menuPosts.siblings('a').removeClass('collapsed');
  }

  let menuSettings = $('#menu-settings');
  if (routerName == 'slides' || routerName == 'nav-menus' || routerName == 'settings') {
    menuSettings.addClass('in');
    menuSettings.attr('aria-expanded', true);
    menuSettings.siblings('a').removeClass('collapsed');
  }
  $('#' + routerName).addClass('active');
})