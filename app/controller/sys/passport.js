'use strict';

const Controller = require('../../core/base_controller');
const ms = require('ms');
const { genPassword } = require('../../utils/cryp'); // md5 加密

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { user_name, password, rememberMe } = ctx.request.body;
    const userInfo = await ctx.service.sys.user.getUserInfo(
      user_name,
      genPassword(password)
    );
    if (!userInfo) {
      // 登录失败
      this.error('loginFailInfo');
    }

    // 登录成功
    if (ctx.session.userInfo == null) {
      // 设置 Session
      ctx.session.userInfo = userInfo;
    }
    this.success(200, '登录成功');
    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
    if (rememberMe) ctx.session.maxAge = ms('30d');
  }

  async logout() {
    const { ctx } = this;
    const { username, password, rememberMe } = ctx.request.query;

    // 设置 Session
    ctx.session.user = { username, password };
    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
    if (rememberMe) ctx.session.maxAge = ms('30d');
    ctx.body = ctx.session;
  }
}

module.exports = UserController;
