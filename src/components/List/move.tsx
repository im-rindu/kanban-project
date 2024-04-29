export const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  event.dataTransfer.setData("text", event.currentTarget.id);
};

export const onDrop = (event: React.DragEvent<HTMLTitleElement>) => {
  const id = event.dataTransfer.getData("text");
  const target = event.currentTarget;
  target.appendChild(document.getElementById(id)!);
};

export const onDragOver = (event: React.DragEvent<HTMLTitleElement>) => {
  event.preventDefault();
};
