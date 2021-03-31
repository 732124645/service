'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 SYS_USER_ROLE 表
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    await queryInterface.createTable('SYS_USER_ROLE', {
      user_id: { type: STRING },
      role_id: { type: STRING },
    });
  },
  // 在执行数据库降级时调用的函数，删除 SYS_USER_ROLE 表
  down: async queryInterface => {
    await queryInterface.dropTable('SYS_USER_ROLE');
  },
};
