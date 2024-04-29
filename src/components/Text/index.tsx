function Text({ type, text }: TextProps) {
  let textReturn;
  switch (type) {
    case "title":
      textReturn = <h1 className="text-3xl text-black font-sf-700">{text}</h1>;
      break;
    case "sub-title":
      textReturn = (
        <h2 className="text-base text-dark-grey font-sf-600">{text}</h2>
      );
      break;
    default:
      textReturn = <p className="text-sm text-grey font-sf-400">{text}</p>;
      break;
  }
  return textReturn;
}

interface TextProps {
  type: string;
  text: string;
}

export default Text;
