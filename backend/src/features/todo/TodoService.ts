import { ITodo, ITodoDTO, TodoStatus } from "./../../interfaces/todo";
import TodoModel from "./TodoModel";

export interface ITodoService {
  createTodo: (todo: ITodo) => Promise<ITodo>;
  updateTodoStatus: (todoId: string, todoStatus: TodoStatus) => Promise<ITodo>;
  getTodos: (id: string, params: any) => Promise<ITodo[]>;
}

export class TodoService implements ITodoService {
  constructor() {}

  async createTodo(todo: ITodoDTO): Promise<ITodo> {
    try {
      const newTodo = await TodoModel.create(todo);

      return newTodo.dataValues;
    } catch (error: any) {
      throw error;
    }
  }

  async updateTodoStatus(todoId: string, todoStatus: TodoStatus) {
    const result = await TodoModel.update(
      { status: todoStatus },
      {
        where: {
          id: todoId,
        },
      }
    );

    if (result[0] === 0) {
      throw Error("Todo with that ID not found");
    }

    const todo = await TodoModel.findByPk(todoId);

    return todo?.dataValues;
  }

  async getTodos(id: string, params: any) {
    try {
      const todos = await TodoModel.findAll({
        where: {
          ownerId: id,
          ...params,
        },
        order: [["createdAt", "DESC"]],
      });

      return todos as unknown as ITodo[];
    } catch (error: any) {
      throw error;
    }
  }
}
