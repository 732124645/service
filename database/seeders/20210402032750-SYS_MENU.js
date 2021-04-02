"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SYS_MENU",
      [
        {
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0c",
          menu_sort: 5,
          parent_id: "",
          component: "",
          name: "System",
          path: "/system",
          icon: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0d",
          menu_sort: 0,
          parent_id: "55193e33-039f-469d-93fa-f8ed77b7ed0c",
          component: "",
          name: "User",
          path: "/user",
          icon: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0e",
          menu_sort: 1,
          parent_id: "55193e33-039f-469d-93fa-f8ed77b7ed0c",
          component: "",
          name: "Role",
          path: "/role",
          icon: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          menu_id: "55193e33-039f-469d-93fa-f8ed77b7ed0f",
          menu_sort: 2,
          parent_id: "55193e33-039f-469d-93fa-f8ed77b7ed0c",
          component: "",
          name: "Menu",
          path: "/menu",
          icon: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "SYS_MENU",
      [
        { user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0d" },
        { user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0e" },
        { user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0f" },
      ],
      {}
    );
  },
};
