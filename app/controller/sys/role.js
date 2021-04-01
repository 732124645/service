'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class authUserController extends Controller {
  /**
   * @description 查询角色列表
   */
  async index() {
    const { ctx } = this;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Sys.Role.findAll(query);
  }

  /**
   * @description 创建角色
   */
  async create() {
    const { ctx } = this;
    const { role_id, role_name } = ctx.request.body;
    const role = await ctx.model.Sys.Role.create({ role_id, role_name });
    ctx.status = 201;
    ctx.body = role;
  }

  /**
   * @description 删除角色
   */
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    const role = await ctx.model.Sys.Role.findByPk(id);
    if (!role) {
      ctx.status = 404;
      return;
    }

    await role.destroy();
    ctx.status = 200;
  }

  /**
   * @description 角色详情
   */
  async details() {
    const { ctx } = this;
    ctx.body = await ctx.model.Sys.Role.findByPk(ctx.params.id);
  }

  /**
   * @description 修改角色详情
   */
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const role = await ctx.model.Sys.Role.findByPk(id);
    if (!role) {
      ctx.status = 404;
      return;
    }

    const { role_id, role_name } = ctx.request.body;
    ctx.body = role;
    await role.update({ role_id, role_name });
    ctx.body = role;
  }
}
module.exports = authUserController;
