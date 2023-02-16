import { UserController } from "./../features/user/UserController";
import { TodoService } from "./../features/todo/TodoService";
import { UserService } from "../features/user/UserService";
import { TodoController } from "./../features/todo/TodoController";
import { Express } from "express";

const BASE_API_V1 = "/api/v1/";

const todoService = new TodoService();
const todoController = new TodoController(todoService);

const userService = new UserService();
const userController = new UserController(userService);

export const routes = (app: Express) => {
  app.get(
    `${BASE_API_V1}todos`,
    async (req, res) => await todoController.getTodos(req, res)
  );
  app.post(
    `${BASE_API_V1}todo/create`,
    async (req, res) => await todoController.createTodo(req, res)
  );
  app.patch(
    `${BASE_API_V1}todo/update_status`,
    async (req, res) => await todoController.updateTodoStatus(req, res)
  );

  app.post(
    `${BASE_API_V1}user/create`,
    async (req, res) => await userController.signUp(req, res)
  );
};
