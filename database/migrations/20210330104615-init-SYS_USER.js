'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 SYS_USER 表
  up: async (queryInterface, Sequelize) => {
    const { STRING, DATE, BOOLEAN, UUIDV4, UUID } = Sequelize;
    await queryInterface.createTable('SYS_USER', {
      user_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
      user_name: { type: STRING, allowNull: false },
      nick_name: { type: STRING, allowNull: false },
      password: { type: STRING, allowNull: false },
      password_status: {
        type: BOOLEAN,
        defaultValue: 0,
        comment: 'true 为冻结 false 为未冻结',
      },
      email: { type: STRING, allowNull: false },
      phone: { type: STRING, allowNull: false },
      photo_id: { type: STRING, defaultValue: UUIDV4 },
      delete_flag: {
        type: BOOLEAN,
        defaultValue: 0,
        comment: 'true 为删除 false 为未删除',
      },
      created_at: { type: DATE },
      updated_at: { type: DATE },
    });
  },
  // 在执行数据库降级时调用的函数，删除 SYS_USER 表
  down: async queryInterface => {
    await queryInterface.dropTable('SYS_USER');
  },
};
