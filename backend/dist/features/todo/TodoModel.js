"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../core/db/db");
const TodoModel = db_1.sequelize.define("todos", {
    id: {
        type: db_1.DataTypes.UUID,
        defaultValue: db_1.DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    ownerId: {
        type: db_1.DataTypes.UUID,
    },
    title: {
        type: db_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: db_1.DataTypes.STRING(50),
        allowNull: false,
    },
    priority: {
        type: db_1.DataTypes.INTEGER,
        allowNull: false,
    },
    expiresAt: {
        type: db_1.DataTypes.DATE,
        defaultValue: db_1.DataTypes.NOW,
        allowNull: false,
    },
});
exports.default = TodoModel;
