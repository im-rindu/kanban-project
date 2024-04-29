import { Card, Label } from "components";
import { onDragStart, onDrop, onDragOver } from "./move";

function List({ title, taskList, listColor }: ListProps) {
  return (
    <article
      className="h-inherit w-2/5 p-3 m-2"
      id={title}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Label type="sub-title" text={title} color={listColor} />
      {taskList.map((item) => (
        <div
          key={item.title}
          id={item.title}
          onDragStart={onDragStart}
          draggable
        >
          <Card
            key={item.title}
            title={item.title}
            desc={item.desc}
            label={item.label}
            checkList={item.checkList}
            assignee={item.assignee}
          />
        </div>
      ))}
    </article>
  );
}

export default List;

interface ListProps {
  title: string;
  listColor: string;
  taskList: {
    title: string;
    desc: string;
    label: { color: string; text: string }[];
    assignee?: string[];
    checkList?: {
      text: string;
      checked: boolean;
    }[];
  }[];
}
