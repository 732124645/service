'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  /* 用户管理 */
  app.get('/sys/user', controller.sys.user.index); // 用户列表
  app.post('/sys/user', controller.sys.user.create); // 新建用户
  app.delete('/sys/user/:id', controller.sys.user.destroy); // 删除用户
  app.get('/sys/user/:id/details', controller.sys.user.details); // 用户详情
  app.put('/sys/user/:id', controller.sys.user.update); // 修改用户详情
  app.put('/sys/userPwd/:id', controller.sys.user.setPassword); // 重置密码

  /* passport */
  router.post('/login', controller.sys.passport.login); // 登录
  router.get('/logout', controller.sys.passport.logout); // 退出登录
};
