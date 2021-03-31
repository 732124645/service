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
  config.middleware = [];

  config.security = {
    csrf: {
      headerName: 'x-csrf-token', // 自定义请求头
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

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'start_default',
    host: 'localhost',
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
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
