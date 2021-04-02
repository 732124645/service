"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SYS_ROLE",
      [
        {
          role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c",
          role_name: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d",
          role_name: "editer",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "SYS_ROLE",
      [
        { role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c" },
        { role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d" },
      ],
      {}
    );
  },
};
