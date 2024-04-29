import { Checkbox, Label, Text } from "components";

function Card({ title, desc, label, checkList, assignee }: CardProps) {
  return (
    <div className="bg-white width-full rounded-xl p-4 my-4 border border-solid border-[#DDDDDD] drop-shadow">
      <div className="flex gap-1">
        {assignee?.map((item) => (
          <img
            src={item}
            className="w-5 h-5 mb-1 rounded-full border border-solid border-lavender"
          />
        ))}
      </div>
      <Text type="sub-title" text={title} />
      <Text type="normal" text={desc} />
      {checkList?.map((item) => (
        <Checkbox text={item.text} checked={item.checked} />
      ))}
      <br />
      {label?.map((item) => (
        <Label color={item.color} text={item.text} type="normal" />
      ))}
    </div>
  );
}

interface CardProps {
  title: string;
  desc: string;
  label?: { color: string; text: string }[];
  assignee?: string[];
  checkList?: {
    text: string;
    checked: boolean;
  }[];
}

export default Card;
