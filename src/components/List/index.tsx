import { Card, Label } from "components";

function List({ title, taskList, listColor }: ListProps) {
  return (
    <article className="h-full w-80 p-3 m-2">
      <Label type="sub-title" text={title} color={listColor} />
      {taskList.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          desc={item.desc}
          label={item.label}
          checkList={item.checkList}
          assignee={item.assignee}
        />
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
