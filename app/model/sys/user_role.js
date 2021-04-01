'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const user_role = app.model.define('SYS_USER_ROLE', {
    user_id: { type: STRING },
    role_id: { type: STRING },
  });

  return user_role;
};
