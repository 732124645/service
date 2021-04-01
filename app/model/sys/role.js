'use strict';

module.exports = app => {
  const { STRING, DATE, UUIDV4, UUID } = app.Sequelize;

  const role = app.model.define('SYS_ROLE', {
    role_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
    role_name: { type: STRING, allowNull: false },
    created_at: { type: DATE },
    updated_at: { type: DATE },
  });

  return role;
};
