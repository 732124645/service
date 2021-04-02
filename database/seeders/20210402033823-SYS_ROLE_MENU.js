"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SYS_ROLE_MENU",
      [
        {
          role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0c",
        },
        {
          role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0d",
        },
        {
          role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0e",
        },
        {
          role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0f",
        },
        {
          role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0c",
        },
        {
          role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0d",
        },
        {
          role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0e",
        },
        {
          role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d",
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0f",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "SYS_ROLE_MENU",
      [
        { role_id: "15193e33-039f-469d-93fa-f8ed77b7ed0c" },
        { role_id: "25193e33-039f-469d-93fa-f8ed77b7ed0d" },
      ],
      {}
    );
  },
};
