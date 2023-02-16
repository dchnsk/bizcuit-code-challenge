import { ITodo } from "@/interfaces/todo";

const priorityIndicatorStyles: { [index: number]: string } = {
  1: "bg-red-900 border-red-400",
  2: "bg-orange-900 border-orange-400",
  3: "bg-blue-900 border-blue-400",
};

type TodoItemProps = {
  data: ITodo;
  onDone: () => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ data, onDone }) => {
  const todoExpiresAt = new Date(data.expiresAt).toUTCString();

  return (
    <div
      className={`
        p-2
        flex flex-col items-start gap-1
        rounded-md
        duration-300 
        border-b-[2px] 
        hover:bg-secondary
      `}
    >
      <div className={"flex flex-row items-center gap-2 max-w-full"}>
        <button
          onClick={onDone}
          className={`
            min-w-[20px] h-[20px] rounded-full 
            ${priorityIndicatorStyles[data.priority]}
            border-[3px] 
            opacity-80
        `}
        ></button>
        <span className={`overflow-hidden whitespace-nowrap text-ellipsis`}>
          {data.title}
        </span>
      </div>
      <div className="">
        <span>{todoExpiresAt}</span>
      </div>
    </div>
  );
};
