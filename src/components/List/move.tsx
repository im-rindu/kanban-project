export const onDragStart = (
  event: React.DragEvent<HTMLDivElement>
  // oldList: string,
  // setCount: React.Dispatch<React.SetStateAction<number>>
) => {
  event.dataTransfer.setData("text", event.currentTarget.id);
  // const countString = localStorage.getItem(oldList);
  // const count = countString ? parseInt(countString, 10) - 1 : 1;
  // localStorage.setItem(oldList, count.toString());
  // setCount(count);
};

export const onDrop = (
  event: React.DragEvent<HTMLElement>,
  newList: string,
  setCount: React.Dispatch<React.SetStateAction<number>>
) => {
  const id = event.dataTransfer.getData("text");
  const target = event.currentTarget;
  target.appendChild(document.getElementById(id)!);
  const countString = localStorage.getItem(newList);
  const count = countString ? parseInt(countString, 10) + 1 : 1;
  localStorage.setItem(newList, count.toString());
  setCount(count);
};

export const onDragOver = (event: React.DragEvent<HTMLTitleElement>) => {
  event.preventDefault();
};
