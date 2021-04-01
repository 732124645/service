'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER, UUIDV4, UUID } = app.Sequelize;

  const menu = app.model.define('SYS_USER', {
    menu_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
    menu_sort: { type: INTEGER, allowNull: false },
    parent_id: { type: INTEGER },
    name: { type: STRING, allowNull: false },
    path: { type: STRING, allowNull: false },
    icon: { type: STRING },
    created_at: { type: DATE },
    updated_at: { type: DATE },
  });

  return menu;
};
