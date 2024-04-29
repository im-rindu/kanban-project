import { Label } from "components";
import React from "react";

function Checkbox({ text, checked }: TextProps) {
  const [isChecked, setIsChecked] = React.useState(checked);

  return (
    <div>
      <input
        type="checkbox"
        className="w-4 h-4 mr-2 rounded-full"
        defaultChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <Label
        type="checkbox"
        text={text}
        addClass={isChecked ? "line-through" : ""}
      />
    </div>
  );
}

export default Checkbox;

interface TextProps {
  text: string;
  checked: boolean;
}
