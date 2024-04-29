import { Kanban } from "containers";
import { dataDummy1, dataDummy2 } from "./dummy";
import React from "react";

function App() {
  const [data, setData] = React.useState(true);
  const dataDummy = data ? dataDummy1 : dataDummy2;
  return (
    <Kanban
      title={dataDummy.title}
      desc={dataDummy.desc}
      listData={dataDummy.listData}
      setData={setData}
      data={data}
    />
  );
}

export default App;
