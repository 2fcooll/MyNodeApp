const { DataTypes } = require('sequelize/dist');
const { sequelize } = require('./index');

const Town = sequelize.define('Town', {
  name: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'Towns',
});

module.exports = { Town };