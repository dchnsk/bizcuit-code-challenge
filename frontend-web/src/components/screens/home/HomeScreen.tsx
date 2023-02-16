import { NextPage } from "next";
import { useEffect } from "react";
import { CreateNewTodo } from "@components/todo/CreateNewTodo";
import { useTodoStore } from "@store/todo/todoStore";
import { useUserStore } from "@store/user/userStore";
import { TodoList } from "@components/todo";
import { TodoListFilters } from "@components/todo";

export const HomeScreen: NextPage = () => {
  const userData = useUserStore((state) => state.userData);
  const loadTodoList = useTodoStore((state) => state.loadTodoList);
  const todoList = useTodoStore((state) => state.todoList);

  useEffect(() => {
    if (userData != null) {
      loadTodoList(userData.id);
    }
  }, []);

  return (
    <main className={` min-w-[260px] min-h-full md:w-[600px] `}>
      <div className={"pt-10 flex flex-col gap-4"}>
        <TodoListFilters />
        <div className={`flex flex-col gap-4`}>
          <CreateNewTodo />
          <TodoList todoList={todoList} />
        </div>
      </div>
    </main>
  );
};
