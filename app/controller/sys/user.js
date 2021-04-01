'use strict';

const Controller = require('egg').Controller;
const { genPassword } = require('../../utils/cryp'); // md5 加密

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class authUserController extends Controller {
  /**
   * @description 查询用户列表
   */
  async index() {
    const { ctx } = this;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Sys.User.findAll(query);
  }

  /**
   * @description 创建用户
   */
  async create() {
    const { ctx } = this;
    const { user_name, nick_name, password, email, phone } = ctx.request.body;
    const newPwd = genPassword(password);
    const user = await ctx.model.Sys.User.create({
      user_name,
      nick_name,
      password: newPwd,
      email,
      phone,
    });
    ctx.status = 201;
    ctx.body = user;
  }

  /**
   * @description 删除用户
   */
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    const user = await ctx.model.Sys.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }

  /**
   * @description 用户详情
   */
  async details() {
    const { ctx } = this;
    ctx.body = await ctx.model.Sys.User.findByPk(ctx.params.id);
  }

  /**
   * @description 修改用户详情
   */
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const user = await ctx.model.Sys.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { user_name, nick_name, password, email, phone } = ctx.request.body;
    const newPwd = genPassword(password);
    ctx.body = user;
    await user.update({
      user_name,
      nick_name,
      password: newPwd,
      email,
      phone,
    });
    ctx.body = user;
  }

  /**
   * @description 重置密码
   */
  async setPassword() {
    const { ctx } = this;
    ctx.body = 111;
  }

  /**
   * @description 获取用户信息
   */
  async userInfo() {
    const { ctx } = this;
    ctx.body = 111;
  }
}
module.exports = authUserController;
