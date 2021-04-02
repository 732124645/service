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

  /**
   * @description 创建菜单
   */
  async create() {
    try {
      const { ctx } = this;
      const { menuSort, parentId, name, path, icon, component } = ctx.request.body;
      const role = await ctx.model.Sys.Role.create({
        menu_sort: menuSort,
        parent_id: parentId,
        name,
        path,
        icon,
        component,
      });
      this.success(role);
    } catch (error) {
      this.error('operationFailure');
    }
  }
}
module.exports = authUserController;
