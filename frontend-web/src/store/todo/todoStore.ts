import { ITodo, ITodoDTO, TodoStatus } from "@/interfaces/todo";
import { TodoService } from "@/services/todoService";
import { create } from "zustand";

export interface TodoStore {
  todoList: ITodo[];
  isLoading: boolean;
  createTodo: (todoData: ITodoDTO) => Promise<void>;
  loadTodoList: (userId: string) => Promise<void>;
  updateTodoStatus: (todoId: string, status: TodoStatus) => Promise<void>;
  errors: string[];
}

export const useTodoStore = create<TodoStore>()((set, get) => ({
  todoList: [],
  isLoading: false,
  errors: [],
  createTodo: async (todoData: ITodoDTO) => {
    const createTodoResponse = await TodoService.createTodo({
      title: todoData.title,
      priority: todoData.priority,
      ownerId: todoData.ownerId,
      expiresAt: todoData.expiresAt,
    });

    const newTodo = createTodoResponse.data.todo;

    set({ todoList: [newTodo, ...get().todoList] });
  },
  loadTodoList: async (userId: string) => {
    const loadTodoListResult = await TodoService.loadTodoList(userId);

    set({ todoList: loadTodoListResult.todos });
  },
  updateTodoStatus: async (todoId: string, status: TodoStatus) => {
    await TodoService.updateStatus(todoId, status);

    set({
      todoList: get().todoList.map((todo) =>
        todo.id == todoId ? { ...todo, status } : todo
      ),
    });
  },
}));
