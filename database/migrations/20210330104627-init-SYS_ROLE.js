'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 role 表
  up: async (queryInterface, Sequelize) => {
    const { STRING, UUIDV4 } = Sequelize;
    await queryInterface.createTable('SYS_ROLE', {
      roleId: {
        type: STRING,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      roleName: { type: STRING, allowNull: false },
      userId: {
        type: STRING,
        references: {
          model: {
            tableName: 'SYS_USER',
          },
          key: 'userId',
        },
        allowNull: false,
      },
    });
  },
  // 在执行数据库降级时调用的函数，删除 SYS_USER 表
  down: async queryInterface => {
    await queryInterface.dropTable('SYS_ROLE');
  },
};
