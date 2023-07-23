import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Recipe } from "./Recipe.js";

export const Category = sequelize.define(
    "category",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
    }
);

Category.hasMany(
    Recipe,
    {
        foreignKey: "categoryId",
        sourceKey: "id"
    }
);

Recipe.belongsTo(
    Category,
    {
        foreignKey: "categoryId",
        targetId: "id"
    }
);
