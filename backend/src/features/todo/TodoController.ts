import { TodoStatus } from "./../../interfaces/todo";
import { Response, Request } from "express";
import { ITodoService } from "./TodoService";

export interface ITodoController {
  createTodo: (req: Request, res: Response) => Promise<void>;
  updateTodoStatus: (req: Request, res: Response) => Promise<void>;
  getTodos: (req: Request, res: Response) => Promise<void>;
}

export class TodoController implements ITodoController {
  private todoService: ITodoService;

  constructor(todoService: ITodoService) {
    this.todoService = todoService;
  }

  async createTodo(req: Request, res: Response) {
    try {
      const { title, priority, expiresAt, ownerId } = req.body;

      const newTodo = await this.todoService.createTodo({
        title,
        ownerId,
        priority,
        expiresAt: new Date(expiresAt),
        status: TodoStatus.uncompleted,
      });

      res.status(201).json({
        status: "success",
        data: {
          todo: newTodo,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
  async updateTodoStatus(req: Request, res: Response) {
    try {
      const { todoId, status } = req.body;

      const todos = await this.todoService.updateTodoStatus(todoId, status);

      res.status(200).json({
        status: "success",
        data: {
          todos,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  async getTodos(req: Request, res: Response) {
    try {
      const { ownerId } = req.query;

      const todos = await this.todoService.getTodos(
        ownerId as string,
        req.params
      );

      res.status(200).json({
        status: "success",
        results: todos.length,
        todos,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}
