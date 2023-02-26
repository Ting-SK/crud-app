const sequelize = require("sequelize");
const db = require("../db/config");

const book = db.define(
    "book",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: sequelize.TEXT,
            allowNull: false,
        },
        author_id: {
            type: sequelize.INTEGER,
        },
        created_at: {
            type: sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: sequelize.DATE,
            allowNull: true,
        },
        year: {
            type: sequelize.NUMBER,
            allowNull: false,
        },
        image: {
            type: sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = book;
