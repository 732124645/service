"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SYS_USER_ROLE",
      [
        {
          user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0a",
          role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c",
        },
        {
          user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0b",
          role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "SYS_USER_ROLE",
      [
        { user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0a" },
        { user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0b" },
      ],
      {}
    );
  },
};
