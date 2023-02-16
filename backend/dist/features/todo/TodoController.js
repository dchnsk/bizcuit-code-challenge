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
exports.TodoController = void 0;
const todo_1 = require("./../../interfaces/todo");
class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, priority, expiresAt, ownerId } = req.body;
                const newTodo = yield this.todoService.createTodo({
                    title,
                    ownerId,
                    priority,
                    expiresAt: new Date(expiresAt),
                    status: todo_1.TodoStatus.uncompleted,
                });
                res.status(201).json({
                    status: "success",
                    data: {
                        todo: newTodo,
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
    updateTodoStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { todoId, status } = req.body;
                const todos = yield this.todoService.updateTodoStatus(todoId, status);
                res.status(200).json({
                    status: "success",
                    data: {
                        todos,
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
    getTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { ownerId } = req.query;
                const todos = yield this.todoService.getTodos(ownerId, req.params);
                res.status(200).json({
                    status: "success",
                    results: todos.length,
                    todos,
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
}
exports.TodoController = TodoController;
