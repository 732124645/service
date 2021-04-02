"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "SYS_USER",
      [
        {
          user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0a",
          user_name: "admin",
          nick_name: "系统管理员",
          password: "d90a995881e3cd7ab1758dd300680fc4",
          email: "admin@admin.com",
          phone: "18888888888",
          photo_id: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: "55193e33-039f-469d-93fa-f8ed77b7ed0b",
          user_name: "editor",
          nick_name: "黑旋风李逵",
          password: "d90a995881e3cd7ab1758dd300680fc4",
          email: "editor@editor.com",
          phone: "16666666666",
          photo_id: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "SYS_USER",
      [{ user_name: "admin" }, { user_name: "editor" }],
      {}
    );
  },
};
