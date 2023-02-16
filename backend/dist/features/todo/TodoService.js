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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const TodoModel_1 = __importDefault(require("./TodoModel"));
class TodoService {
    constructor() { }
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTodo = yield TodoModel_1.default.create(todo);
                return newTodo.dataValues;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateTodoStatus(todoId, todoStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield TodoModel_1.default.update({ status: todoStatus }, {
                where: {
                    id: todoId,
                },
            });
            if (result[0] === 0) {
                throw Error("Todo with that ID not found");
            }
            const todo = yield TodoModel_1.default.findByPk(todoId);
            return todo === null || todo === void 0 ? void 0 : todo.dataValues;
        });
    }
    getTodos(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield TodoModel_1.default.findAll({
                    where: Object.assign({ ownerId: id }, params),
                    order: [["createdAt", "DESC"]],
                });
                return todos;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.TodoService = TodoService;
