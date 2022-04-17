const Sequelize = require('sequelize');
const bcrypt = require("bcrypt");
const { DataTypes } = Sequelize;
const sequelize = new Sequelize('sqlite::memory:');
const queryInterface = sequelize.getQueryInterface();

// TABLES ------

// queryInterface.createTable('Users', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     townId: {
//         type: DataTypes.INTEGER,
//     },
//     email: {
//         type: DataTypes.STRING,
//     },
//     firstName: {
//         type: DataTypes.STRING,
//     },
//     lastName: {
//         type: DataTypes.STRING,
//     },
//     password: {
//         type: DataTypes.STRING,
//     },
//     token: {
//         type: DataTypes.STRING,
//     },
//     createdAt: {
//         type:  DataTypes.DATE,
//     },
//     updatedAt: {
//         type: DataTypes.DATE,
//     },
// }, {
//     instanceMethods: {
//         generateHash(password) {
//             return bcrypt.hash(password, bcrypt.genSaltSync(8));
//         },
//     },
// });

// MODELS ------

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    token: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Users',
});

module.exports = { 
    sequelize,
    User,
};