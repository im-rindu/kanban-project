import { Card, Label } from "components";
import { onDragStart, onDrop, onDragOver } from "./move";
import React from "react";

function List({ title, taskList, listColor }: ListProps) {
  const [count, setCount] = React.useState(taskList.length);
  localStorage.setItem(title, JSON.stringify(count));

  let taskListReturn;
  if (localStorage.getItem(title) == "0") {
    taskListReturn = (
      <div>
        <div className="bg-white width-full rounded-xl p-4 my-4 border border-solid border-[#DDDDDD] drop-shadow">
          <Label type="sub-title" text="Nothing to be here 🙃" />
        </div>
        <div className="bg-white width-full rounded-xl p-4 my-4 border border-solid border-[#DDDDDD] drop-shadow">
          <img src="/this is fine.png" />
        </div>
      </div>
    );
  } else {
    taskListReturn = taskList.map((item) => (
      <div
        key={item.title}
        id={item.title}
        onDragStart={(e) => onDragStart(e)}
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
    ));
  }

  return (
    <article
      className="h-inherit min-w-80 p-3 m-2"
      id={title}
      onDragOver={onDragOver}
      onDrop={(e) => {
        onDrop(e, title, setCount);
      }}
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
