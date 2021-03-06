/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617075020828_5201';

  // add your middleware config here
  config.middleware = [ 'gzip', 'loginCheck' ];
  config.loginCheck = {
    ignore: [ '/login' ], // 忽略注册和登陆的接口
  };
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.security = {
    headerName: 'x-csrf-token', // 自定义请求头
    // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => {
        if (ctx.request.url === '/login') {
          return true;
        }
        return false;
      },
    },
  };
  config.exports = {
    session: {
      renew: true,
    },
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: '0',
    },
    agent: true,
  };

  config.sessionRedis = {
    key: 'SYS_SESSION',
    maxAge: 30 * 60 * 1000,
    httpOnly: true,
    encrype: false,
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'start_default',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    define: {
      underscored: true,
      freezeTableName: true,
    },
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };

  // add your user config here
  const userConfig = {
    myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
