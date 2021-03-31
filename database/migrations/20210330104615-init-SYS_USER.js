'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 SYS_USER 表
  up: async (queryInterface, Sequelize) => {
    const { STRING, UUIDV4 } = Sequelize;
    await queryInterface.createTable('SYS_USER', {
      userId: {
        type: STRING,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      userName: { type: STRING, allowNull: false },
      nickName: { type: STRING, allowNull: false },
      password: { type: STRING, allowNull: false },
      email: { type: STRING, allowNull: false },
      phone: { type: STRING, allowNull: false },
    });
  },
  // 在执行数据库降级时调用的函数，删除 SYS_USER 表
  down: async queryInterface => {
    await queryInterface.dropTable('SYS_USER');
  },
};
