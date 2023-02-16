"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../core/db/db");
const UserModel = db_1.sequelize.define("users", {
    id: {
        type: db_1.DataTypes.UUID,
        defaultValue: db_1.DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: db_1.DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: db_1.DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: db_1.DataTypes.STRING(255),
        allowNull: false,
    },
});
exports.default = UserModel;
