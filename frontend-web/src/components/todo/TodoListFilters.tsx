import { CheckIcon, InboxIcon } from "@heroicons/react/24/outline";

interface TodoFilter {
  id: number;
  title: string;
  icon: JSX.Element;
  onClick: () => void;
}

export const TodoListFilters: React.FC = () => {
  const filters: TodoFilter[] = [
    {
      id: 0,
      title: "Inbox",
      icon: <InboxIcon className="h-6 text-white" />,
      onClick: () => {},
    },
    {
      id: 1,
      title: "Completed",
      icon: <CheckIcon className="h-6 text-white" />,
      onClick: () => {},
    },
  ];

  return (
    <div className={`flex items-center gap-6 justify-center`}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={filter.onClick}
          className={"flex gap-1 text-2xl text-center items-center"}
        >
          {filter.icon}
          {filter.title}
        </button>
      ))}
    </div>
  );
};
