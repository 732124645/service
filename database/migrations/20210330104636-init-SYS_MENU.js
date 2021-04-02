"use strict";

module.exports = {
  // 在执行数据库升级时调用的函数，创建 SYS_MENU 表
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE, UUIDV4, UUID } = Sequelize;
    await queryInterface.createTable("SYS_MENU", {
      menu_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
      menu_sort: { type: INTEGER, allowNull: false },
      parent_id: { type: STRING },
      component: { type: STRING },
      name: { type: STRING, allowNull: false },
      path: { type: STRING, allowNull: false },
      icon: { type: STRING },
      created_at: { type: DATE },
      updated_at: { type: DATE },
    });
  },
  // 在执行数据库降级时调用的函数，删除 SYS_MENU 表
  down: async (queryInterface) => {
    await queryInterface.dropTable("SYS_MENU");
  },
};
