'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const role_menu = app.model.define('SYS_ROLE_MENU', {
    role_id: { type: STRING },
    menu_id: { type: STRING },
  });

  return role_menu;
};
