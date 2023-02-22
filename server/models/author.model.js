const sequelize = require("sequelize");
const db = require("../db/config");

const author = db.define(
    "author",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        last_name: {
            type: sequelize.TEXT,
            allowNull: false,
        },
        first_name: {
            type: sequelize.TEXT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = author;
