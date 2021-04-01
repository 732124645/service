'use strict';

const Controller = require('../../core/base_controller');
const ms = require('ms');
const { genPassword } = require('../../utils/cryp'); // md5 加密

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password, rememberMe } = ctx.request.body;
    const userInfo = await ctx.service.sys.user.getUserInfo(
      username,
      genPassword(password)
    );
    if (!userInfo) {
      // 登录失败
      return this.error('loginFailInfo');
    }

    // 登录成功
    if (ctx.session.userInfo == null) {
      // 设置 Session
      ctx.session.userInfo = userInfo;
    }
    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
    if (rememberMe) ctx.session.maxAge = ms('30d');
    return this.success(200, '登录成功');
  }


  async logout() {
    const { ctx } = this;
    ctx.session = null;
    return this.success(200);
  }
}

module.exports = UserController;
