'use strict';

const Controller = require('egg').Controller;

class authUserController extends Controller {
  /**
   * @description 查询菜单列表
   */
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.Sys.Menu.findAll();
  }
}
module.exports = authUserController;
