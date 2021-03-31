'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 SYS_ROLE_MENU 表
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    await queryInterface.createTable('SYS_ROLE_MENU', {
      role_id: { type: STRING },
      menu_id: { type: STRING },
    });
  },
  // 在执行数据库降级时调用的函数，删除 SYS_ROLE_MENU 表
  down: async queryInterface => {
    await queryInterface.dropTable('SYS_ROLE_MENU');
  },
};
