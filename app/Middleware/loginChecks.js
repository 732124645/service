/**
 * @description 登录验证的中间件
 * @author 雷卓
 */

'use strict';

module.exports = () => {
  return async function loginCheck(ctx, next) {
    // 获取头部token信息   如果不存在，表示没有登录，跳转到首页
    const token = ctx.request.header.qmtoken;
    if (token) {
      // 对比redis信息
      const result = ctx.session.userInfo;
      if (result == null) {
        this.error('loginCheckFailInfo');
      } else {
        await next();
        return;
      }
    } else {
      return this.error('loginCheckFailInfo');
    }

  };
};

