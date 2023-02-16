import { http } from "@/utils/httpUtils";
import { ITodo, ITodoDTO, TodoStatus } from "./../interfaces/todo";
import { BASE_API_URI } from "./../constants/API";

export const TodoService = {
  async loadTodoList(id: string) {
    const result = await http.get(`${BASE_API_URI}todos`, { ownerId: id });

    const todos = await result.data;

    return todos;
  },
  async createTodo(todo: ITodoDTO) {
    const result = await http.post(`${BASE_API_URI}todo/create`, todo);

    const todos = await result.data;

    return todos;
  },
  async updateStatus(todoId: string, status: TodoStatus) {
    const result = await http.patch(`${BASE_API_URI}todo/update_status`, {
      todoId,
      status,
    });

    const todos = await result.data;

    return todos;
  },
};
