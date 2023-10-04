import { useEffect } from "react";
import { Button, Select } from "../../../ui-liberty";
import { useGeneralContext } from "../../context/General";
import { IconFocusCentered } from "../../icons";
import "./Header.scss";
const Header = () => {
  const { canvas, selectedZoom } = useGeneralContext();

  const handlerZoom = (zoom: number) => {
    const canvasEL = canvas?.current?.style;
    if (canvasEL) {
      canvasEL.transform = `scale(${zoom / 100})`;
    }
  };

  useEffect(() => {
    handlerZoom(selectedZoom);
  }, [selectedZoom]);

  return (
    <div className='header'>
      <div className='header__logo'>Services.</div>
      <div className='header__controls'>
        <Button>
          <IconFocusCentered />
        </Button>
        <Select />
      </div>
    </div>
  );
};

export default Header;
