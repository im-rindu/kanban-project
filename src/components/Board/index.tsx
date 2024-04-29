import { List } from "components";

function Board({ listData }: BoardProps) {
  return (
    <section className="min-w-full h-full bg-lighter-grey rounded-lg flex">
      {listData.map((item) => (
        <List
          key={item.title}
          title={item.title}
          taskList={item.taskList}
          listColor={item.listColor}
        />
      ))}
    </section>
  );
}

export default Board;

interface BoardProps {
  listData: {
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
  }[];
}
