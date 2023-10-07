import { useEffect } from "react";
import { Button, Select } from "../../../ui-liberty";
import { useGeneralContext } from "../../context/General";
import { IconFocusCentered } from "../../icons";
import "./Header.scss";
const Header = () => {
  const { diagram, canvas, selectedZoom, count, listView, setListView } =
    useGeneralContext();

  const handlerZoom = (zoom: number) => {
    const diagramEL = diagram?.current?.style;
    if (diagramEL) {
      diagramEL.transform = `scale(${zoom / 100})`;
    }
  };

  const centeredDiagram = () => {
    if (canvas?.current) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const canvasWidth = canvas?.current.offsetWidth;
      const canvasHeight = canvas?.current.offsetHeight;

      const centerX = (screenWidth - canvasWidth) / 2;
      const centerY = (screenHeight - canvasHeight) / 2;
      canvas.current.style.transition = "all 0.4s ease";
      canvas.current.style.left = centerX + "px";
      canvas.current.style.top = centerY - 80 + "px";
      setTimeout(() => {
        if (canvas.current) {
          canvas.current.style.transition = "none";
        }
      }, 400);
    }
  };

  useEffect(() => {
    handlerZoom(selectedZoom);
  }, [selectedZoom]);

  useEffect(() => {
    if (!listView) {
      centeredDiagram();
    }
  }, [listView]);

  return (
    <div className='header'>
      <div className='header__logo'>Categories {count.categories}</div>
      <div className='header__controls'>
        <Button
          theme={listView ? "filled" : "outlined"}
          onClick={() => setListView(!listView)}
        >
          LIST VIEW
        </Button>
        <Button onClick={centeredDiagram} disabled={listView}>
          <IconFocusCentered />
        </Button>
        <Select />
      </div>
    </div>
  );
};

export default Header;
