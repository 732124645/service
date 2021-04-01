'use strict';

const { Controller } = require('egg');
const errInfo = require('./ErrorInfo');
class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(code = 200, message = 'success', data = {}) {
    const res = {
      code,
      data,
      message,
    };
    this.ctx.body = res;
  }

  error(key) {
    this.ctx.body(key ? errInfo[key] : { code: 500, message: 'error' });
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
module.exports = BaseController;
