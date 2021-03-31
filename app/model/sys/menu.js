'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER, UUIDV4, UUID } = app.Sequelize;

  const menu = app.model.define('sys_menu', {
    menu_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
    menu_name: { type: STRING, allowNull: false },
    menu_sort: { type: INTEGER, allowNull: false },
    parent_id: { type: INTEGER },
    icon: { type: STRING },
    created_at: { type: DATE },
    updated_at: { type: DATE },
  });

  return menu;
};
