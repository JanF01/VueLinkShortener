const Sequelize = require('sequelize');

module.exports = (Sequelize) => {
var Short = Sequelize.define("Short", {
      id:{
        type: Sequelize.INT,
        primaryKey: true
      },
      short:{
          type: Sequelize.STRING
      },
      long:{
          type: Sequelize.STRING
      }



})


  return Short;
}