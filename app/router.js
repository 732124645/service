'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  /* 用户管理 */
  router.get('/sys/user', controller.sys.user.index); // 用户列表
  router.post('/sys/user', controller.sys.user.create); // 新建用户
  router.delete('/sys/user/:id', controller.sys.user.destroy); // 删除用户
  router.get('/sys/user/:id/details', controller.sys.user.details); // 用户详情
  router.put('/sys/user/:id', controller.sys.user.update); // 修改用户详情
  router.put('/sys/userPwd/:id', controller.sys.user.setPassword); // 重置密码

  /* 角色管理 */
  router.get('/sys/role', controller.sys.role.index); // 角色列表
  router.post('/sys/role', controller.sys.role.create); // 新建角色
  router.delete('/sys/role/:id', controller.sys.role.destroy); // 删除角色
  router.get('/sys/role/:id/details', controller.sys.role.details); // 角色详情
  router.put('/sys/role/:id', controller.sys.role.update); // 修改角色详情

  /* 菜单 */
  router.get('/sys/menu', controller.sys.menu.index); // 菜单列表
  router.post('/sys/menu', controller.sys.menu.create); // 新建菜单

  /* passport */
  router.post('/login', controller.sys.passport.login); // 登录
  router.get('/logout', controller.sys.passport.logout); // 退出登录
};
