import { Card, Label } from "components";
import { onDragStart, onDrop, onDragOver } from "./move";

function List({ title, taskList, listColor }: ListProps) {
  let taskListReturn;
  if (!taskList.length) {
    taskListReturn = (
      <div>
        <div className="bg-white width-full rounded-xl p-4 my-4 border border-solid border-[#DDDDDD] drop-shadow">
          <Label type="sub-title" text="Nothing to be done 🙃" />
        </div>
        <div className="bg-white width-full rounded-xl p-4 my-4 border border-solid border-[#DDDDDD] drop-shadow">
          <img src="/this is fine.png" />
        </div>
      </div>
    );
  } else {
    taskListReturn = taskList.map((item) => (
      <div key={item.title} id={item.title} onDragStart={onDragStart} draggable>
        <Card
          key={item.title}
          title={item.title}
          desc={item.desc}
          label={item.label}
          checkList={item.checkList}
          assignee={item.assignee}
        />
      </div>
    ));
  }

  return (
    <article
      className="h-inherit min-w-80 p-3 m-2"
      id={title}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Label type="sub-title" text={title} color={listColor} />
      {taskListReturn}
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
