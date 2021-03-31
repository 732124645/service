'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 SYS_ROLE 表
  up: async (queryInterface, Sequelize) => {
    const { STRING, DATE, UUIDV4, UUID } = Sequelize;
    await queryInterface.createTable('SYS_ROLE', {
      role_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
      role_name: { type: STRING, allowNull: false },
      created_at: { type: DATE },
      updated_at: { type: DATE },
    });
  },
  // 在执行数据库降级时调用的函数，删除 SYS_ROLE 表
  down: async queryInterface => {
    await queryInterface.dropTable('SYS_ROLE');
  },
};
