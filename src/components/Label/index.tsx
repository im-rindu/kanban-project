function Label({ color, text, type, addClass }: TextProps) {
  let label;
  if (type === "sub-title") {
    label = (
      <label
        className={`text-grey text-base font-sf-600 ${color} px-4 py-1 rounded-lg`}
      >
        {text}
      </label>
    );
  } else if (type === "normal") {
    label = (
      <label
        className={`text-grey text-sm font-sf-500 ${color} px-4 py-1 rounded-lg`}
      >
        {text}
      </label>
    );
  } else {
    label = (
      <label className={`text-grey text-sm font-sf-400 ${addClass}`}>
        {text}
      </label>
    );
  }
  return label;
}

interface TextProps {
  color?: string;
  text: string;
  type: string;
  addClass?: string;
}

export default Label;
