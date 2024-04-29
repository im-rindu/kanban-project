import { Board, Text } from "components";

function Kanban({ title, desc, listData, setData, data }: KanbanProps) {
  return (
    <main className="max-w-screen h-screen">
      <button
        className="mt-6 text-base bg-dark-grey text-white py-1 px-3 rounded-lg absolute top-5 right-8"
        onClick={() => setData(data ? false : true)}
      >
        Change Data
      </button>
      <Text type="title" text={title} />
      <Text type="normal" text={desc} />
      <br />
      <Board listData={listData} />
    </main>
  );
}

interface KanbanProps {
  setData: React.Dispatch<React.SetStateAction<boolean>>;
  data: boolean;
  title: string;
  desc: string;
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

export default Kanban;
