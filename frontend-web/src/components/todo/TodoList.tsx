import { ITodo, TodoStatus } from "@interfaces/todo";
import { useTodoStore } from "@store/todo/todoStore";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<{ todoList: ITodo[] }> = ({ todoList }) => {
  const updateTodoStatus = useTodoStore((state) => state.updateTodoStatus);
  return (
    <ul className="flex flex-col gap-2">
      {todoList.map((todoElem) =>
        todoElem.status == TodoStatus.uncompleted ? (
          <li key={todoElem.id}>
            <TodoItem
              onDone={() =>
                updateTodoStatus(todoElem.id!, TodoStatus.completed)
              }
              data={todoElem}
            />
          </li>
        ) : null
      )}
    </ul>
  );
};
