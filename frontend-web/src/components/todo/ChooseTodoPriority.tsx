import { Dropdown } from "flowbite-react";

const possiblePriorities = [1, 2, 3, 0];

export const ChooseTodoPriority: React.FC<{
  todoPriority: number;
  onClick: (elem: number) => void;
}> = ({ todoPriority, onClick }) => {
  return (
    <Dropdown
      label={`Priority ${todoPriority}`}
      placement="bottom"
      style={{
        background: "transparent",
        color: "white",
        border: "1px solid white",
      }}
    >
      {possiblePriorities.map((elem) => (
        <Dropdown.Item value={elem} key={elem} onClick={() => onClick(elem)}>
          Priority {elem}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
