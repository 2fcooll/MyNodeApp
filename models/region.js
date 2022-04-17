const { DataTypes } = require('sequelize/dist');
const { sequelize } = require('./index');

const Region = sequelize.define('Region', {
  name: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'Regions',
});

module.exports = { Region };