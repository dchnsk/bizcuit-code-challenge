import { ITodoDTO } from "@interfaces/todo";
import { useTodoStore } from "@store/todo/todoStore";
import { useUserStore } from "@store/user/userStore";
import { TextInput, Button, Dropdown } from "flowbite-react";
import { useState } from "react";
import { ChooseTodoPriority } from "./ChooseTodoPriority";

export const CreateNewTodo: React.FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoPriority, setTodoPriority] = useState<number>(0);
  const [todoExpirationDate, setTodoExpirationDate] = useState<Date>(
    new Date()
  );
  const createTodo = useTodoStore((state) => state.createTodo);
  const userData = useUserStore((state) => state.userData);

  const isNewTodoValid = (todo: ITodoDTO) => {
    if (todo.title === "") return false;
    return true;
  };

  const clearTodoConfig = () => {
    setTodoTitle("");
    setTodoPriority(0);
    setTodoExpirationDate(new Date());
  };

  const onCreateTodo = async () => {
    if (!userData) return;

    const todo = {
      title: todoTitle,
      ownerId: userData.id,
      priority: todoPriority,
      expiresAt: todoExpirationDate,
    };

    if (!isNewTodoValid(todo)) return;

    await createTodo(todo);

    clearTodoConfig();
  };

  return (
    <div className={`flex flex-col gap-2 w-full h-[100px] rounded-lg`}>
      <TextInput
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
        style={{ background: "transparent", color: "white" }}
        type="text"
        placeholder="Type in your new TODO"
      />
      <div className={`flex flex-row`}></div>
      <div className={`flex flex-row justify-between`}>
        <div className={`flex gap-2`}>
          <ChooseTodoPriority
            todoPriority={todoPriority}
            onClick={(elem) => {
              setTodoPriority(elem);
            }}
          />
          <Button
            style={{
              background: "transparent",
              border: "1px solid white",
            }}
          >
            Date
          </Button>
        </div>
        <Button
          onClick={onCreateTodo}
          style={{
            background: "transparent",
            border: "1px solid white",
          }}
        >
          Create TODO
        </Button>
      </div>
    </div>
  );
};
