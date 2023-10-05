import { useRef, useState } from "react";
import { DrawingCanvas, Header } from "./common/components";
import { GeneralContext } from "./common/context/General";
import { treeData } from "./data";

function App() {
  const canvas = useRef<HTMLDivElement>(null);
  const diagram = useRef<HTMLDivElement>(null);
  const [selectedZoom, setSelectedZoom] = useState<number>(100);

  return (
    <GeneralContext.Provider
      value={{
        canvas,
        diagram,
        selectedZoom,
        treeData,
        setSelectedZoom,
      }}
    >
      <Header />
      <DrawingCanvas />
    </GeneralContext.Provider>
  );
}

export default App;
