const Sequelize = require("sequelize");

const db = require("../database/db.js");

const Short = db.sequelize.define("short", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  url: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false
});

module.exports = Short;