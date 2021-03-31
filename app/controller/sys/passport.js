'use strict';

const Controller = require('egg').Controller;
const ms = require('ms');

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password, rememberMe } = ctx.request.query;

    // 设置 Session
    ctx.session.user = { username, password };
    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
    if (rememberMe) ctx.session.maxAge = ms('30d');
    ctx.body = ctx.session;
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
