'use strict';

module.exports = app => {
  const { STRING, DATE, BOOLEAN, UUIDV4, UUID } = app.Sequelize;

  const user = app.model.define('sys_user', {
    user_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
    user_name: { type: STRING, allowNull: false },
    nick_name: { type: STRING, allowNull: false },
    password: { type: STRING, allowNull: false },
    password_status: { type: BOOLEAN, defaultValue: 1 },
    email: { type: STRING, allowNull: false },
    phone: { type: STRING, allowNull: false },
    photo_id: { type: STRING },
    delete_flag: { type: BOOLEAN, defaultValue: 1 },
    created_at: { type: DATE },
    updated_at: { type: DATE },
  });

  return user;
};
