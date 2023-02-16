"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const crypto_1 = require("./../../core/utils/crypto");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, password } = req.body;
                const encryptedPassword = (0, crypto_1.encrypt)(password);
                const newUser = yield this.userService.createUser({
                    email,
                    name,
                    password: encryptedPassword,
                });
                res.status(201).json({
                    status: "success",
                    data: {
                        user: newUser,
                    },
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "error",
                    message: error.message,
                });
            }
        });
    }
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, name, password } = req.body;
            const decryptedPassword = (0, crypto_1.decrypt)(password);
        });
    }
}
exports.UserController = UserController;
