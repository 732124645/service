'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const role_menu = app.model.define('sys_role_menu', {
    role_id: { type: STRING },
    menu_id: { type: STRING },
  });

  return role_menu;
};
