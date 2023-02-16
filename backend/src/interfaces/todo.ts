export enum TodoStatus {
  uncompleted = "uncompleted",
  completed = "completed",
}

export interface ITodo {
  id?: string;
  title: string;
  ownerId: string;
  priority: number;
  expiresAt: Date;
  status: TodoStatus;
}

export interface ITodoDTO extends Omit<ITodo, "id" | "status"> {}
