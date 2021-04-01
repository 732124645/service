'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserInfo(user_name, password) {
    const { ctx } = this;
    // 查询条件
    const whereOpt = {
      user_name,
    };
    if (password) {
      Object.assign(whereOpt, { password });
    }

    // 查询
    const result = await ctx.model.Sys.User.findOne({
      attributes: [ 'user_id', 'user_name', 'nick_name', 'email', 'phone' ],
      where: whereOpt,
    });
    if (result == null) {
      // 未找到
      return result;
    }

    return result;
  }
}

module.exports = UserService;
