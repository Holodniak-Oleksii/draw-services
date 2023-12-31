import { useRef, useState } from "react";
import { DrawingCanvas, Header, List } from "./common/components";
import { GeneralContext } from "./common/context/General";
import { ICount, ITree } from "./common/types/general";
import { initialTree } from "./data";

function App() {
  const canvas = useRef<HTMLDivElement>(null);
  const diagram = useRef<HTMLDivElement>(null);

  const [selectedZoom, setSelectedZoom] = useState<number>(100);
  const [tree, setTree] = useState<ITree[]>(initialTree);
  const [listView, setListView] = useState<boolean>(false);
  const [count, setCount] = useState<ICount>({
    categories: 0,
    id: 0,
  });

  return (
    <GeneralContext.Provider
      value={{
        canvas,
        diagram,
        selectedZoom,
        tree,
        setTree,
        setSelectedZoom,
        count,
        setCount,
        listView,
        setListView,
      }}
    >
      <Header />
      {listView ? <List /> : <DrawingCanvas />}
    </GeneralContext.Provider>
  );
}

export default App;
