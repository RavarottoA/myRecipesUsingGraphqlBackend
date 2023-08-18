import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Users = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING //has to be unique
        },
        password: {
            type: DataTypes.STRING
        }
    }
);
