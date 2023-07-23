import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Recipe = sequelize.define(
    "recipe",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        ingredients: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }
);
