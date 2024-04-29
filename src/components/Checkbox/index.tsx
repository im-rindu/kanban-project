import { Label } from "components";

function Checkbox({ text, checked }: TextProps) {
  return (
    <div>
      <input
        type="checkbox"
        className="w-4 h-4 mr-2 rounded-full"
        checked={checked}
      />
      <Label
        type="checkbox"
        text={text}
        addClass={checked ? "line-through" : ""}
      />
    </div>
  );
}

export default Checkbox;

interface TextProps {
  text: string;
  checked: boolean;
}
