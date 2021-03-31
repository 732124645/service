'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sessionRedis: {
    enable: true,
    package: 'egg-session-redis',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
