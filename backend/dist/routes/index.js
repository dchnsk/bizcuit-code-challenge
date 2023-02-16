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
exports.routes = void 0;
const UserController_1 = require("./../features/user/UserController");
const TodoService_1 = require("./../features/todo/TodoService");
const UserService_1 = require("../features/user/UserService");
const TodoController_1 = require("./../features/todo/TodoController");
const BASE_API_V1 = "/api/v1/";
const todoService = new TodoService_1.TodoService();
const todoController = new TodoController_1.TodoController(todoService);
const userService = new UserService_1.UserService();
const userController = new UserController_1.UserController(userService);
const routes = (app) => {
    app.get(`${BASE_API_V1}todos`, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield todoController.getTodos(req, res); }));
    app.post(`${BASE_API_V1}todo/create`, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield todoController.createTodo(req, res); }));
    app.patch(`${BASE_API_V1}todo/update_status`, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield todoController.updateTodoStatus(req, res); }));
    app.post(`${BASE_API_V1}user/create`, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield userController.signUp(req, res); }));
};
exports.routes = routes;
